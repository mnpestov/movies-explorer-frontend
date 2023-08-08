import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={
          <>
            <Header />
            <Main />
            <Footer />
          </>

        } />
        <Route path='/signup' element={< Register />} />
        <Route path='/signin' element={< Login />} />
        <Route path='/movies' element={
          <>
            <Header loggedIn={true} />
            < Movies />
          </>} />
        <Route path='/saved-movies' element={<>
          <Header loggedIn={true} />
          < SavedMovies />
        </>} />
        <Route path='/profile' element={
          <>
            <Header loggedIn={true} />
            < Profile />
          </>

        } />
      </Routes>
    </div>
  );
}

export default App;
