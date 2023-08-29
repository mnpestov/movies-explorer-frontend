import './MoviesCardList.css';
import { useState, useEffect } from 'react';
// import picture1 from '../../images/picmovies1.png';
// import picture2 from '../../images/picmovies2.png';
// import picture3 from '../../images/picmovies3.png';
// import picture4 from '../../images/picmovies4.png';
// import picture5 from '../../images/picmovies5.png';
// import picture6 from '../../images/picmovies6.png';
// import picture7 from '../../images/picmovies7.png';
// import picture8 from '../../images/picmovies8.png';
// import picture9 from '../../images/picmovies9.png';
// import picture10 from '../../images/picmovies10.png';
// import picture11 from '../../images/picmovies11.png';
// import picture12 from '../../images/picmovies12.png';
import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, onDelete, onSave }) {
    const location = useLocation();
    let firstStep = 12;
    let step = 3;
    if (window.screen.width <= 936 & window.screen.width > 480 ) {
        firstStep = 8;
        step = 2;
    } else if (window.screen.width <= 480) {
        firstStep = 5;
        step = 2;
    }
    const [showCards, setShowCards] = useState(cards.slice(0, firstStep))
    const [position, setPosition] = useState(firstStep);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function showMore() {
        setShowCards(cards.slice(0, position + step));
        setPosition(position + step);
    }

    function handleResize() {
        const { screen: { width } } = window;
        if (width > 480) step = 7;
        else step = 5;
    }

    return (
        <section className={`${location.pathname === '/saved-movies' ? "movies-list__saved-movies" : ""} movies-list`}>
            <div className="movies-list__container">
                <ul className='cards'>
                    {cards.length
                        ? showCards.map((item) => (<MoviesCard movie={item} onDelete={onDelete} onSave={onSave} />))
                        : (<p className="movies-list__alert" >
                            Ничего не найдено
                        </p>)}
                </ul>
                {cards.length > position
                    ? (<button type="button" className='movies-list__btn' onClick={showMore}>Ещё</button>)
                    : null}

            </div>
        </section>
    );
}

export default MoviesCardList;