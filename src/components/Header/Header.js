import React from "react";
import './Header.css'; 
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
    const location = useLocation();
    const elementLogin = (
        <div className="header__login">
            <Link to="/signup" className="header__registration-link">Регистрация</Link>
            <Link to="/signin" className="header__login-btn">Войти</Link>
        </div>
    );

    return (
        <header className={`${location.pathname === '/' ? "header_color_blue" : ""} header`}>

            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img className="logo" src={logo} alt={"Лого"} />
                </Link>

                {loggedIn ? (<Navigation />) : elementLogin}
            </div>
        </header>
    );
}

export default Header;