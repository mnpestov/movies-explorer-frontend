class ApiAuth {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    register({ name, email, password }) {
        return fetch(`${this._baseUrl}/signup`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then(this._checkResponse);
    }

    login({ email, password }) {
        return fetch(`${this._baseUrl}/signin`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({ password, email })
        })
            .then(this._checkResponse);
    }

    checkToken(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                ...this._headers,
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then(this._checkResponse);
    }
}

export const AuthApi = new ApiAuth(
    {
        // baseUrl: 'http://localhost:3000',
        baseUrl: 'http://api.diplommnpestov.nomoredomains.rocks',
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

// export default apiAuth;