import './MoviesCardList.css';
import picture1 from '../../images/picmovies1.png';
import { useLocation } from 'react-router-dom'

function MoviesCard() {
    const location = useLocation();
    const isSaved = true;
    return (
        <section className="movies-list">
            <div className="movies-list__container">
                <ul className='cards'>
                    <li className='card'>
                        <img src={picture1} alt="movie1"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Киноальманах «100 лет дизайна»</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className={`card__save ${isSaved ? "card__saved" : ""}`}>{!isSaved ? "Сохранить" : ""}</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default MoviesCard;