import React from "react";
import "./Techs.css"

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__subtitle-caption">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__list">
                <li className="tech">HTML</li>
                <li className="tech">CSS</li>
                <li className="tech">JS</li>
                <li className="tech">React</li>
                <li className="tech">Git</li>
                <li className="tech">Express.js</li>
                <li className="tech">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;