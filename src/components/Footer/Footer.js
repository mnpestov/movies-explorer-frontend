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
                    <p className="footer__link">Яндекс.Практикум</p>
                    <p className="footer__link">Github</p>
                </div>

            </div>


        </footer>
    );
}
export default Footer;