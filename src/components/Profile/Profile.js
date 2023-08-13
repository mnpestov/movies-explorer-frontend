import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import './Profile.css';



function Profile() {
    const navigate = useNavigate();

    const currentUser = useContext(CurrentUserContext);
    const [user, setUser] = useState({});

    useEffect(() => {
      setUser(currentUser);
  }, [currentUser]);

    console.log(currentUser.name);
    console.log(user);

    return (
        <form className="profile">
          <div className="profile__container">
            <h1 className="profile__title">{`Привет, ${user.name}!`}</h1>
            <div className="profile__line">
              <label className="profile__label">Имя</label>
              <p className="profile__info">{user.name}</p>
            </div>
            <div className="profile__line">
              <label className="profile__label">E-mail</label>
             <p className="profile__info">{user.email}</p>
            </div>
          </div>
          <div className="profile__btns">
                  <button type="button" className="profile__btn">Редактировать</button>
                  <button type="button" className="profile__btn profile__btn_color_red" onClick={()=>navigate('/')}>Выйти из аккаунта</button>
          </div>
        </form >
      );
}

export default Profile;