import React from "react";
import './Portfolio.css'
import portfolioArrow from '../../images/portfolio-arrow.png'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">

                <a className="portfolio__link" href="https://github.com/mnpestov">
                    <span>Статичный сайт</span>
                    <img className="portfolio__arrow" src={portfolioArrow} alt="prtfolio arrow"></img>
                </a>
                <a className="portfolio__link" href="https://github.com/mnpestov">
                    <span>Адаптивный сайт</span>
                    <img className="portfolio__arrow" src={portfolioArrow} alt="prtfolio arrow"></img>
                </a>
                <a className="portfolio__link" href="https://github.com/mnpestov">
                    <span>Одностраничное приложение</span>
                    <img className="portfolio__arrow" src={portfolioArrow} alt="prtfolio arrow"></img>
                </a>

            </div>
        </section>
    );
}

export default Portfolio;