import "./SearchForm.css";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit, onChecked, cards }) {

  const location = useLocation();
  const [request, setReq] = useState({
    request: '',
    isShort: false
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (location.pathname === '/movies') {
      const SearchHistory = localStorage.getItem('SearchHistory');
      if (SearchHistory) {
        const savedSearch = JSON.parse(SearchHistory)
        setReq(savedSearch.params);
      }
    }
  }, []);

  function handleChange(e) {
    const { target: { name, value } } = e;
    setError('')
    setReq({ ...request, [name]: value });
  }

  function handleChecked(e) {
    const { target: { name, checked } } = e;
    setReq({ ...request, [name]: checked });
    onChecked({ request: request.request, isShort: checked }, cards)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (request.request) {
      onSubmit(request);
    } else {
      setError('Нужно ввести ключевое слово')
    }
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={handleSubmit} noValidate>
          <div className="search__search-line">
            <input type="text" name="request" className="search__input" placeholder="Фильм" autoComplete="off" onChange={handleChange} value={request?.request ?? ''} required />
            <button type="submit" className="search__btn"></button>
          </div>
          <div className="search__filter-container">
            <p className="search__label">Короткометражки</p>
            <div className="search__switch-container">
              <div className="search__switch">
                <input type="checkbox" name="isShort" className="search__switch-input" id="short" onChange={handleChecked} checked={request?.isShort ?? false} />
                <div className="search__slider"></div>
                <label htmlFor="short" className="search__switch search__label"></label>
              </div>
            </div>
          </div>
          <span className="search__error">{error}</span>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;