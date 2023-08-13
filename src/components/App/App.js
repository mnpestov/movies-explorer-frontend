import React from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { MainApi } from '../../utils/MainApi';
import { AuthApi } from '../../utils/ApiAuth';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const cbAuthenticate = useCallback((data) => {
    localStorage.setItem('jwt', data.token);
    setLoggedIn(true);
  }, [])

  const checkToken = useCallback(async () => {
    try {
      let jwt = localStorage.getItem('jwt');
      if (!jwt) {
        throw new Error('no token')
      }
      const user = await AuthApi.checkToken(jwt);
      if (!user) {
        throw new Error('invalid user')
      }
      if (user) {
        setLoggedIn(true);
        setUserEmail(user.email)
      }
    } catch (err) {
      console.log('Ошибка: ' + err)
    }
  }, [])

  function showPopupError(message) {
    setError(message ?? 'Произошла ошибка');
    setTimeout(() => setError(null), 5000);
  }

  function handleRegistration(data) {
    AuthApi.register(data)
      .then(() => {
        navigate('/signin')
      })
      .catch((err) => err.then(({ message }) => showPopupError(message)))
  }

  function handleLogin(data) {
    AuthApi.login(data)
      .then((res) => {
        if (res.token) {
          cbAuthenticate(res)
          setUserEmail(data.email)
        }
        navigate('/movies');
      })
      .catch((err) => err.then(({ message }) => showPopupError(message)))
  }

  useEffect(() => {
    checkToken();
  }, [checkToken, loggedIn])

  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
          console.log(user);
          console.log(currentUser);
        })
        .catch(err => console.log('Ошибка', err));
    }

  }, [loggedIn])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

        <Routes>
          <Route exact path='/' element={
            <>
              <Header />
              <Main />
              <Footer />
            </>

          } />
          <Route path='/signup' element={< Register onSubmit={handleRegistration} />} />
          <Route path='/signin' element={< Login onSubmit={handleLogin} />} />
          <Route path='/movies' element={
            <>
              <Header loggedIn={loggedIn} />
              < Movies />
            </>} />
          <Route path='/saved-movies' element={<>
            <Header loggedIn={loggedIn} />
            < SavedMovies />
          </>} />
          <Route path='/profile' element={
            <>
              <Header loggedIn={loggedIn} />
              < Profile />
            </>

          } />
          <Route path='/notfound' element={< NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
