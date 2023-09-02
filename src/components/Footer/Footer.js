// import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__about">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className="footer__copyright">
                <p className="footer__year">&copy; 2020</p>
                <div className='footer__links'>
                    <a className="footer__link" href="https://practicum.yandex.ru/web/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__link" href="https://github.com/dizelgerda" target="_blank" rel="noreferrer">GitHub</a>
                </div>

            </div>


        </footer>
    );
}
export default Footer;