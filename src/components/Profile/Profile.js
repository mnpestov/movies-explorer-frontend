import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext'
import './Profile.css';



function Profile({ logOut, onSubmit }) {
  const navigate = useNavigate();

  const currentUser = useContext(CurrentUserContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  function handleChange(e) {
    const { target: { name, value } } = e;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(user);
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <div className="profile__container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <div className="profile__line">
          <label className="profile__label">Имя</label>
          <input type="name" name="name" className="profile__input" onChange={handleChange} value={user.name} required />
          {/* <p className="profile__info">{user.name}</p> */}
        </div>
        <div className="profile__line">
          <label className="profile__label">E-mail</label>
          <input type="email" name="email" className="profile__input" onChange={handleChange} value={user.email} required />
          {/* <p className="profile__info">{user.email}</p> */}
        </div>
      </div>
      <div className="profile__btns">
        <button type="submit" className="profile__btn" onClick={handleSubmit} disabled={!(user.name !== currentUser.name || user.email !== currentUser.email)}>Редактировать</button>
        <button type="button" className="profile__btn profile__btn_color_red" onClick={logOut}>Выйти из аккаунта</button>
      </div>
    </form >
  );
}

export default Profile;