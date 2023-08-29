import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react';
import { MainApi } from '../../utils/MainApi';

function SavedMovies() {

    const [moviesList, setMoviesList] = useState(null);
    // const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getSavedMovies();
    }, [])

    function changeIsShort(params, movies) {
        setIsLoading(true)
        if (movies) {
            setMoviesList(null);
            const { isShort = false } = params;
            const filteredMovies = movies.filter(({ duration }) => {
                if (isShort && duration > 40) return false;
                return true;
            });
            setMoviesList(filteredMovies);
        }
        setIsLoading(false)
    }

    function getSavedMovies() {
        setIsLoading(true)
        setMoviesList(null);
        MainApi.getMovies()
            .then((movies) => {
                if (movies.length) {
                    setMoviesList(movies);
                    setIsLoading(false)
                    // setMovies(movies)
                }
                setIsLoading(false)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log('Ошибка', err);
            });
    }

    function deleteMovie(id) {
        MainApi.deleteMovie(id)
            .then(() => getSavedMovies())
            .catch((err) => console.log('Ошибка', err));
    }

    function findInName(name, request) {
        if (!name || !request) return 0;

        name = name.toLowerCase();
        request = request.toLowerCase();
        name = name.trim();
        request = request.trim();

        return name.indexOf(request) !== -1
    }

    async function handleSearch(params) {
        setIsLoading(true);
        const { request } = params;

        let movies
        try {
            movies = await MainApi.getMovies()
        } catch (err) {
            console.log('Ошибка', err)
            setIsLoading(false);
        }
        let filteredMovies = movies.filter(({ nameRU, nameEN }) => {

            if (findInName(nameRU, request)) return true;
            else if (findInName(nameEN, request)) return true;

            return false;
        });
        //   setMovies(filteredMovies)
        changeIsShort(params, filteredMovies);
        setIsLoading(false);
    }

    return (
        <>
            <SearchForm onSubmit={handleSearch} onChecked={changeIsShort} />
            {isLoading ? (<Preloader />) : null}
            {moviesList && !isLoading ? (<MoviesCardList cards={moviesList} onDelete={deleteMovie} />) : null}
            <Footer />
        </>
    );
}

export default SavedMovies;