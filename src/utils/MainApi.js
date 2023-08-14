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

    getUserInfo() {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
            .then(this._checkResponse)
    }

    updateUser(user) {
        const token = localStorage.getItem('jwt');
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email
            }),
        })
            .then(this._checkResponse)
    }
}

export const MainApi = new Api({
    baseUrl: 'http://localhost:3000',
});