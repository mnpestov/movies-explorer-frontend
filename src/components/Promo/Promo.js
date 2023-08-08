import React from "react";
import './Promo.css'; 
import landingLogo from "../../images/landing-logo.png"

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                <button type="button" className="btn btn_type_promo">Узнать больше</button>
            </div>
            <img className="promo__landing-logo" src={landingLogo} alt="Картинка планеты"></img>
        </section>
    );

}

export default Promo;