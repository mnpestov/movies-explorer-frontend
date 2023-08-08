import React from "react";
import SearchForm from '../SearchForm/SearchForm';
//import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer'
// import MoviesCard from '../MoviesCard/MoviesCard'

function SavedMovies() {
    return (
        <>
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList />
            {/* <MoviesCard /> */}
            <Footer />
        </>
    );
}

export default SavedMovies;