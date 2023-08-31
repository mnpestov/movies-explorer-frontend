import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { MoviesApi } from '../../utils/MoviesApi';
import { MainApi } from '../../utils/MainApi';

function Movies() {
    const [moviesList, setMoviesList] = useState(null); //список фильмов на рендер
    const [searchHistory, setSearchHistory] = useState(null); //список фильмов с сервера
    const [isLoading, setIsLoading] = useState(false); // прелоудер
    const [params, setParams] = useState(null); //последний поисковой запрос

    useEffect(() => {
        const SearchHistory = localStorage.getItem('SearchHistory'); //проверяем есть ли история поиска
        if (SearchHistory) {
            const savedSearch = JSON.parse(SearchHistory)
            setParams(savedSearch.params); //если есть записываем в переменную последний поисковой запрос
            setSearchHistory(savedSearch.movies); // и последний результат поиска 
            changeIsShort(savedSearch.params, savedSearch.movies);
        }
    }, [])

    function saveSearchHistory(movies, params) { // сохраняем в локал сторедж последний результат поиска и поисковой запрос
        localStorage.removeItem('SearchHistory')
        localStorage.setItem('SearchHistory', JSON.stringify({ movies, params }));
        setSearchHistory(movies);
    }

    function checkSaved(movies) {
        MainApi.getMovies()
            .then((savedMovies) => {
                localStorage.setItem('SavedMovies', JSON.stringify(savedMovies));
                const moviesOnRender = movies.map((item) => {
                    const movie = savedMovies.find(({ movieId, _id }) => movieId === item.movieId);
                    if (movie) {
                        item.isSaved = true;
                        item.savedId = movie._id;
                    } else item.isSaved = false;
                    return item;
                });
                setMoviesList(moviesOnRender);
            })
            .catch((err) => console.log('Ошибка', err));
    }

    function findInName(name, request) { //функция получает на вход название фильма и поисковой запрос возвращает истину если в имени есть запрос ложь если нет
        if (!name || !request) return 0;

        name = name.toLowerCase();
        request = request.toLowerCase();
        name = name.trim();
        request = request.trim();

        return name.indexOf(request) !== -1
    }

    async function handleSearch(params) { //ручка поиска

        const { request, isShort } = params;

        setIsLoading(true); //прелоудер
        setParams(params); //поисковой запрос
        setMoviesList(null); //обнуляем список фильмов

        const allMovies = localStorage.getItem('allMovies');
        let movies = JSON.parse(allMovies);
        if (!movies) {
            try {
                movies = await MoviesApi.getMovies();  //делаем запрос фильмов с сервера
                localStorage.setItem('allMovies', JSON.stringify(movies));
            } catch (err) {
                console.log('Ошибка', err)
                setIsLoading(false);
            }
        }

        let filteredMovies = movies.filter(({ nameRU, nameEN }) => { //фильтруем полученные фильмы по названию
            if (findInName(nameRU, request)) return true;
            else if (findInName(nameEN, request)) return true;
            return false;
        });

        filteredMovies = filteredMovies.filter(({ duration }) => { //фильтруем полученные и отфильтрованные по названию фильмы по продолжительности
            if (isShort && duration > 40) return false;
            return true;
        });

        const moviesOnRender = filteredMovies.map((item) => {
            const { country, director, duration, year, description, trailerLink, id: movieId, nameRU, nameEN } = item;
            const image = `${'https://api.nomoreparties.co'}${item.image.url}`;
            const thumbnail = `${'https://api.nomoreparties.co'}${item.image.formats.thumbnail.url}`;
            return { country, director, duration, year, description, image, trailerLink, movieId, nameRU, nameEN, thumbnail };
        })
        saveSearchHistory(moviesOnRender, params);
        setSearchHistory(moviesOnRender);
        checkSaved(moviesOnRender, params);
        setIsLoading(false)
    }
    function saveMovie(movie) {
        const { country, director, duration, year, description, image, trailerLink, movieId, nameRU, nameEN, thumbnail } = movie;
        MainApi.addMovie({ country, director, duration, year, description, image, trailerLink, movieId, nameRU, nameEN, thumbnail })
            .then((movie) => {
                if (movie) {
                    const moviesOnRender = moviesList.map((item) => {
                        if (item.movieId === movie.movieId) {
                            item.isSaved = true;
                            item.savedId = movie._id;
                        }
                        return item;
                    })
                    setMoviesList(moviesOnRender);
                }
            })
            .catch((err) => console.log('Ошибка', err))
    }
    function deleteMovie(id) {
        MainApi.deleteMovie(id)
            .then((movie) => {
                if (movie) {
                    const moviesOnRender = moviesList.map((item) => {
                        if (item.movieId === movie.movieId) {
                            item.isSaved = false;
                            delete item.savedId;
                        }
                        return item;
                    })
                    console.log(moviesList);
                    console.log(moviesOnRender);
                    setMoviesList(moviesOnRender);
                    // checkSaved(moviesList, params)
                }
            })
            .catch((err) => console.log('Ошибка', err))
    }

    function changeIsShort(params, cards) {
        setIsLoading(true)
        setMoviesList(null);
        if (cards && params.isShort) {
            const filteredMovies = cards.filter(({ duration }) => {
                if (duration > 40) return false;
                return true;
            });
            saveSearchHistory(searchHistory, params);
            checkSaved(filteredMovies);
        } else {
            // saveSearchHistory(searchHistory, params);
            saveSearchHistory(cards, params);
            checkSaved(cards);
        }
        setIsLoading(false)
    }

    return (
        <>
            <SearchForm onSubmit={handleSearch} onChecked={changeIsShort} cards={searchHistory} />
            {isLoading ? (<Preloader />) : null}
            {moviesList && !isLoading ? (<MoviesCardList cards={moviesList} onDelete={deleteMovie} onSave={saveMovie} />) : null}
            <Footer />
        </>
    );
}

export default Movies;