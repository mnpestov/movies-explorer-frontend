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

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { MainApi } from '../../utils/MainApi';
import { AuthApi } from '../../utils/ApiAuth';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
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
      }
    } catch (err) {
      console.log('Ошибка: ' + err)
    }
  }, [])

  function handleRegistration(data) {
    AuthApi.register(data)
      .then(() => {
        handleLogin(data)
      })
      .catch((err) => console.log('Ошибка: ' + err))
  }

  function handleLogin(data) {
    AuthApi.login(data)
      .then((res) => {
        if (res.token) {
          cbAuthenticate(res)
        }
        navigate('/movies');
      })
      .catch((err) => console.log('Ошибка: ' + err))
  }

  function handleUpdate(user) {
    MainApi.updateUser(user)
      .then((res) => {
        setCurrentUser(res)
      })
      .catch((err) => console.log('Ошибка: ' + err))
  }

  const cbLogout = useCallback(() => {
    setLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    navigate('/');
  }, [])

  useEffect(() => {
    checkToken();
  }, [checkToken, loggedIn])

  useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((user) => {
          setCurrentUser(user);
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
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path='/signup' element={< Register onSubmit={handleRegistration} />} />
          <Route path='/signin' element={< Login onSubmit={handleLogin} />} />

          <Route element={<ProtectedRoute loggedIn={loggedIn} />} >
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
                < Profile logOut={cbLogout} onSubmit={handleUpdate} />
              </>

            } />
          </Route>
          <Route path='*' element={< NotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
