import './MoviesCard.css';
import { useLocation } from 'react-router-dom'

function MoviesCard({ movie, onDelete, onSave }) {
    const location = useLocation();

    function getDuration(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours ? `${hours}ч` : ''} ${minutes}м`.trim()
      }

    function handleToggleSaveStatus() {
        if (movie.isSaved) {
            onDelete(movie.savedId);
        }
        else {
            onSave(movie)
        }
    }

    return (

        <li className='card'>
            <a href={movie.trailerLink} className='card__link' target="_blank" rel="noreferrer">
                <img className='card__picture' src={`${movie.image}`} alt="movie1"></img>
            </a>
            <div className='cadr__description'>
                <h2 className='card__name'>{movie.nameRU}</h2>
                <p className='cadr__duration'>{getDuration(movie.duration)}</p>
            </div>
            {location.pathname === '/movies'
                ? (<button type="button" className={`card__save ${movie.isSaved ? "card__saved" : ""}`} onClick={handleToggleSaveStatus}>{!movie.isSaved ? "Сохранить" : ""}</button>)
                : (<button type="button" className='card__save card__delete' onClick={() => onDelete(movie._id)}></button>)}
        </li>

    );
}

export default MoviesCard;