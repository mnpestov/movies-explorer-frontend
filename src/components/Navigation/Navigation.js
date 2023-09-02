import './Navigation.css';

import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navigation() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpenMenu(false) }, [location.pathname])

  return (
    <>
      <button type="button" className={`${isOpenMenu ? "nav__btn_active" : ""}  nav__btn`} onClick={() => setIsOpenMenu(!isOpenMenu)}></button>
      <div className={`nav ${isOpenMenu ? "" : "nav_hiden"}`}>
        <div className="nav__links">
          {isOpenMenu
            ? (<NavLink to="/" className={({ isActive }) => "nav__link " + (isActive ? "nav__link_active" : "")}>Главная</NavLink>)
            : null}
          <NavLink to="/movies" className={({ isActive }) => "nav__link " + (isActive ? "nav__link_active" : "")}>Фильмы</NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => "nav__link " + (isActive ? "nav__link_active" : "")}>Сохранённые фильмы</NavLink>
        </div>
        <Link to="/profile" className="nav__profile">
          <p className="nav__account">Аккаунт</p>
          <div className="nav__profile-icon"></div>
        </Link>
      </div>
    </>
  );
}

export default Navigation;