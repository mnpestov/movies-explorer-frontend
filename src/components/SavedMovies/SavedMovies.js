import React from "react";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
import { useEffect, useState } from 'react';
import { MainApi } from '../../utils/MainApi';

function SavedMovies() {

    const [moviesList, setMoviesList] = useState(null);
    const [savedMovies, setSavedMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchRequest, setSearchRequest] = useState(null);

    useEffect(() => {
        getSavedMovies();
    }, [])

    function getSavedMovies() {
        setIsLoading(true)
        setMoviesList(null);
        MainApi.getMovies()
            .then((movies) => {
                if (movies.length) {
                    setMoviesList(movies);
                    setIsLoading(false)
                    setSavedMovies(movies)
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
            .then(() => handleSearch(searchRequest))
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
        setSearchRequest(params)
        const { request } = params;
        let movies
        try {
            movies = await MainApi.getMovies()
        } catch (err) {
            console.log('Ошибка', err)
            setIsLoading(false);
        }
        let filteredMovies
        if (request) {
            filteredMovies = movies.filter(({ nameRU, nameEN }) => {
                if (findInName(nameRU, request)) return true;
                else if (findInName(nameEN, request)) return true;
                return false;
            });
        } else {
            filteredMovies = movies;
        }
        const { isShort = false } = params;
        filteredMovies = filteredMovies.filter(({ duration }) => {
            if (isShort && duration > 40) return false;
            return true;
        });
        setMoviesList(filteredMovies);
        setIsLoading(false);
    }

    return (
        <>
            <SearchForm onSubmit={handleSearch} onChecked={handleSearch} cards={savedMovies} />
            {isLoading ? (<Preloader />) : null}
            {moviesList && !isLoading ? (<MoviesCardList cards={moviesList} onDelete={deleteMovie} />) : null}
            <Footer />
        </>
    );
}

export default SavedMovies;