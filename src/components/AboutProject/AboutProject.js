import React from "react";
import "./AboutProject.css"
function AboutProject() {
    return (
        <section className="about">
            <h2 className="about__title">О проекте</h2>
            <div className="about__container">
                <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                <p className="about__subtitle-caption">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>

                <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                <p className="about__subtitle-caption">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="about__timeline-container">
                <p className="about__timeline about__timeline_color_green">1&nbsp;неделя</p>
                <p className="about__timeline about__timeline_color_gray">4&nbsp;недели</p>
                <p className="about__caption">Back-end</p>
                <p className="about__caption">Front-end</p>
            </div>
        </section>
    );

}

export default AboutProject;