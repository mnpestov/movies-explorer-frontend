import React from "react";
import studentPhoto from "../../images/studentPhoto.png"
import './AboutMe.css'


function AboutMe() {
    return (
        <section className="student">
            <h2 className="student__title">Студент</h2>
            <div className="student__container">
                <div className="student__resume">
                    <h3 className="student__name">Виталий</h3>
                    <p className="student__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="student__about-me">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С&#160;2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="student__link" href="https://github.com/mnpestov" target="_blank" rel="noreferrer">Github</a>
                </div>
                <img className="student__photo" src={studentPhoto} alt={"portrait"} />
            </div>
        </section>
    );
}

export default AboutMe;