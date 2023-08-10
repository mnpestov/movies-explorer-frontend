import React from "react";
import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';


function Login() {
    return (
        <div className="login">
          <div className="login__container">
            <Link to="/"><img className="login__logo" src={logo} alt="Лого" /></Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form" >
              <label htmlFor="email" className="login__label">E-mail</label>
              <input name="email" type="email" className="login__input" placeholder="Email" required />
              <span className="login__error"></span>
              <label htmlFor="password" className="login__label">Пароль</label>
              <input name="password" type="password" className="login__input" placeholder="Password" minLength={8} required />
              <span className="login__error"></span>
              <button type="submit" className="login__btn">Войти</button>
              <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
            </form>
          </div>
        </div>
      )
    };

export default Login;