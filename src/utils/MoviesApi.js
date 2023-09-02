class Api {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }
  
    getMovies() {
      return fetch(`${this._baseUrl}`, {
        method: 'GET',
      }).then(this._checkResponse);
    }
  }
  
  export const MoviesApi = new Api({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  });