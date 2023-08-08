import React from "react";
import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.png';


function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" src={logo} alt="Лого" /></Link>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form">
                    <label htmlFor="name" className="register__label">Имя</label>
                    <input name="name" type="text" className="register__input" required />
                    <span className="register__error"></span>
                    <label htmlFor="email" className="register__label" >E-mail</label>
                    <input name="email" type="email" className="register__input" required />
                    <span className="register__error"></span>
                    <label htmlFor="password" className="register__label">Пароль</label>
                    <input name="password" type="password" className="register__input" required />
                    <span className="register__error">Что-то пошло не так...</span>
                    <button type="submit" className="register__btn" >Зарегистрироваться</button>
                    <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__link">Войти</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;