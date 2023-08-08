import React from "react";
import './Profile.css';



function Profile() {
    const name = "Виталий"
    const email = "pochta@yandex.ru"
    return (
        <form className="profile">
          <div className="profile__container">
            <h1 className="profile__title">{`Привет, ${name}!`}</h1>
            <div className="profile__line">
              <label className="profile__label">Имя</label>
              <p className="profile__info">{name}</p>
            </div>
            <div className="profile__line">
              <label className="profile__label">E-mail</label>
             <p className="profile__info">{email}</p>
            </div>
          </div>
          <div className="profile__btns">
                  <button type="button" className="profile__btn">Редактировать</button>
                  <button type="button" className="profile__btn profile__btn_color_red">Выйти из аккаунта</button>
          </div>
        </form >
      );
}

export default Profile;