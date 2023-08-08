import "./SearchForm.css";

function SearchForm() {

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__search-line">
            <input type="text" name="request" className="search__input" placeholder="Фильм" required />
            <button type="submit" className="search__btn"></button>
          </div>
          <div className="search__filter-container">
            <p className="search__label">Короткометражки</p>
            <div className="search__switch-container">
              <div className="search__switch">

                <input type="checkbox" name="isShort" className="search__switch-input" id="short" />
                <div className="search__slider"></div>
                <label htmlFor="isShort" for="short" className="search__switch search__label"></label>
              </div>

            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

export default SearchForm;