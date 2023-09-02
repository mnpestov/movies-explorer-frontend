import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';


function Register({ onSubmit }) {

    const [data, setData] = useState({});
    const [isValid, setIsValid] = useState({});
    const [errors, setErrors] = useState({});
    const regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i;

    function checkValid(name, value) {
        if (name === 'email') {
            if (regEmail.test(value)) {
                setIsValid({ ...isValid, email: true })
                setErrors({ ...errors, email: '' })
            } else {
                setIsValid({ ...isValid, email: false })
                setErrors({ ...errors, email: 'Введите email' })
            }
        }
        else if (name === 'password') {
            if (value.length >= 8) {
                setIsValid({ ...isValid, password: true })
                setErrors({ ...errors, password: '' })
            } else {
                setIsValid({ ...isValid, password: false })
                setErrors({ ...errors, password: 'Пароль должен быть не менее 8 символов' })
            }
        }
        else if (name === 'name') {
            if (value.length > 2 && value.length <= 30) {
                setIsValid({ ...isValid, name: true })
                setErrors({ ...errors, name: '' })
            } else {
                setIsValid({ ...isValid, name: false })
                setErrors({ ...errors, name: 'Имя должно быть длиннее 2 и короче 30 символов' })
            }
        }
    }

    function handleChange(e) {
        const { target: { name, value } } = e;
        setData({ ...data, [name]: value });
        checkValid(name, value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(data);
    }

    return (
        <div className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" src={logo} alt="Лого" /></Link>
                <h1 className="register__title">Добро пожаловать!</h1>
                <form className="register__form" onSubmit={handleSubmit}>
                    <label htmlFor="name" className="register__label">Имя</label>
                    <input name="name" type="text" className="register__input" placeholder="Name" onChange={handleChange} required />
                    <span className="register__error">{errors.name}</span>
                    <label htmlFor="email" className="register__label">E-mail</label>
                    <input name="email" type="email" className="register__input" placeholder="Email" onChange={handleChange} required />
                    <span className="register__error">{errors.email}</span>
                    <label htmlFor="password" className="register__label">Пароль</label>
                    <input name="password" type="password" className="register__input" placeholder="Password" onChange={handleChange} required />
                    <span className="register__error">{errors.password}</span>
                    <button type="submit" className="register__btn" disabled={!(isValid.name && isValid.email && isValid.password)}>Зарегистрироваться</button>
                    <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__link">Войти</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Register;