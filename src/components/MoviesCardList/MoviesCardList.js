import './MoviesCardList.css';
import picture1 from '../../images/picmovies1.png';
import picture2 from '../../images/picmovies2.png';
import picture3 from '../../images/picmovies3.png';
import picture4 from '../../images/picmovies4.png';
import picture5 from '../../images/picmovies5.png';
import picture6 from '../../images/picmovies6.png';
import picture7 from '../../images/picmovies7.png';
import picture8 from '../../images/picmovies8.png';
import picture9 from '../../images/picmovies9.png';
import picture10 from '../../images/picmovies10.png';
import picture11 from '../../images/picmovies11.png';
import picture12 from '../../images/picmovies12.png';
import { useLocation } from 'react-router-dom'
// import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    const location = useLocation();
    const isSaved = true;
    return (
        <section className={`${location.pathname === '/saved-movies' ? "movies-list__saved-movies" : ""} movies-list`}>  
            <div className="movies-list__container">
                <ul className='cards'>
                    <li className='card'>
                        <img className='card__picture' src={picture1} alt="33 слова о дизайне"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>33 слова о дизайне</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture2} alt="Киноальманах «100 лет дизайна»"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Киноальманах «100 лет дизайна»</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className={`card__save ${isSaved ? "card__saved" : ""}`}>{!isSaved ? "Сохранить" : ""}</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture3} alt="В погоне за Бенкси"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className={`card__save ${isSaved ? "card__saved" : ""}`}>{!isSaved ? "Сохранить" : ""}</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture4} alt="Баския: Взрыв реальности"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture5} alt="Бег это свобода"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture6} alt="Книготорговцы"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture7} alt="По волнам: Искусство звука в кино"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture8} alt="Когда я думаю о Германии ночью"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Gimme Danger: История Игги и The Stooges</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture9} alt="Gimme Danger: История Игги и The Stooges"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture10} alt="Дженис: Маленькая девочка грустит"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture11} alt="Соберись перед прыжком"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                    <li className='card'>
                        <img className='card__picture' src={picture12} alt="Пи Джей Харви: A dog called money"></img>
                        <div className='cadr__description'>
                            <h2 className='card__name'>Name</h2>
                            <p className='cadr__duration'>1ч 17м</p>
                        </div>
                        {location.pathname === '/movies'
                            ? (<button type="button" className='card__save'>Сохранить</button>)
                            : (<button type="button" className='card__save card__delete' ></button>)}
                    </li>
                </ul>
                {/* <MoviesCard /> */}
                {location.pathname === '/movies'
                            ? (<button type="button" className='movies-list__btn'>Ещё</button>)
                            : null}
                {/* <button type="button" className='movies-list__btn'>Ещё</button> */}
            </div>
        </section>
    );
}

export default MoviesCardList;