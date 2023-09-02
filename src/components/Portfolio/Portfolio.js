import React from "react";
import './Portfolio.css'
import portfolioArrow from '../../images/portfolio-arrow.svg'

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__links">

                <a className="portfolio__link" href="https://github.com/mnpestov" target="_blank" rel="noreferrer">
                    <span className="porfolio__text">Статичный сайт</span>
                    <img className="portfolio__arrow" src={portfolioArrow} alt="prtfolio arrow"></img>
                </a>
                <a className="portfolio__link" href="https://github.com/mnpestov" target="_blank" rel="noreferrer">
                    <span className="porfolio__text">Адаптивный сайт</span>
                    <img className="portfolio__arrow" src={portfolioArrow} alt="prtfolio arrow"></img>
                </a>
                <a className="portfolio__link" href="https://github.com/mnpestov" target="_blank" rel="noreferrer">
                    <span className="porfolio__text">Одностраничное приложение</span>
                    <img className="portfolio__arrow" src={portfolioArrow} alt="prtfolio arrow"></img>
                </a>

            </div>
        </section>
    );
}

export default Portfolio;