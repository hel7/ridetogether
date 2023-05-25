import React, { useState } from 'react';
import './App.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

function App() {
  const [closingPopup, setClosingPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const closeRegisterPopup = () => {
    setClosingPopup(true);
    setTimeout(() => {
      setShowRegisterPopup(false);
      setClosingPopup(false);
    }, 500);
  };

  document.onclick = (args) => {
    if (args.target.id === 'popup-background') {
      closeRegisterPopup();
      closeLoginPopup();
    }
  };

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const openRegisterPopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
  };

  const handleDateChange = (date) => {
    const currentDate = moment();
    const ageLimitDate = currentDate.subtract(18, 'years');

    if (date.isBefore(ageLimitDate, 'day')) {
      setSelectedDate(date);
    } else {
      setSelectedDate(ageLimitDate);
    }
  };

  const closeLoginPopup = () => {
    setClosingPopup(true);
    setTimeout(() => {
      setShowLoginPopup(false);
      setClosingPopup(false);
    }, 500);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="header-logo">
          <img src="Group 1.png" alt="Logo" />
          <h1 className="header-title">RideTogether</h1>
        </div>
        <div className="header-buttons">
          <button className="button" onClick={toggleRegisterPopup}>
            Реєстрація
          </button>
          <button className="button" onClick={toggleLoginPopup}>
            Авторизація
          </button>
        </div>
      </header>
      <main className="main">
        <div className="main-info">
          <h2>Про сервіс</h2>
          <p>
            Наш сервіс допомагає знайти ідеальних попутників для подорожей за
            маршрутом, датами, транспортом та пасажирами.
            <br />
            Створюйте профіль, додавайте інформацію про себе та подорожі.
            <br /> Читайте відгуки та оцінки інших користувачів.
            <br />
            <br />
            Приєднуйтесь та знайдіть ідеальних попутників для незабутніх
            подорожей!
            <br />
          </p>
        </div>
        <div className="main-image">
          <img
            src="https://img.freepik.com/free-photo/holiday-illustration-of-flying-bunch-of-blue-balloon-hearts-happy-valentines-daygenerative-ai_1258-150790.jpg"
            alt=""
          />
        </div>
      </main>
      <footer className="footer">
        <p> © 2023 RideTogether. Всі права захищені.</p>
      </footer>
      {showRegisterPopup && (
        <div
          id="popup-background"
          className={`popup ${
            showRegisterPopup && !closingPopup ? 'popup-appear' : 'popup-disappear'
          }`}
        >
          <div
            className={`popup-content ${
              showRegisterPopup && !closingPopup ? '' : 'popup-disappear'
            }`}
          >
            <h2>Реєстрація</h2>
            <form>
              <label htmlFor="login">Логін</label>
              <input type="text" id="login" />
              <label htmlFor="email">Електронна пошта</label>
              <input type="email" id="email" />
              <label htmlFor="birthdate">Дата народження</label>
              <Datetime
                id="birthdate"
                value={selectedDate}
                onChange={handleDateChange}
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                closeOnSelect={true}
                inputProps={{ readOnly: true }}
                isValidDate={(current) => current.isBefore(moment().subtract(18, 'years'), 'day')}
              />
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" />
              <label htmlFor="password-repeat">Повторіть пароль</label>
              <input type="password" id="password-repeat" />
              <div className="popup-buttons">
                <button type="button" className="button">
                  Зареєструватися
                </button>
                <button type="button" className="closeButton" onClick={closeRegisterPopup}>
                  <img
                    src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png"
                    width="30"
                    height="30"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showLoginPopup && (
        <div
          id="popup-background"
          className={`popup ${
            showLoginPopup && !closingPopup ? 'popup-appear' : 'popup-disappear'
          }`}
        >
          <div
            className={`popup-content ${
              showLoginPopup && !closingPopup ? '' : 'popup-disappear'
            }`}
          >
            <h2>Авторизація</h2>
            <form>
              <label htmlFor="login">Логін</label>
              <input type="text" id="login" />
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" />
              <div className="popup-buttons">
                <button type="button" className="button">
                  Увійти
                </button>
                <button className="button">Ввійти через Google</button>
                <div className="textCent">
                  <label id="text">Або</label>
                </div>
                <button className="button" onClick={openRegisterPopup}>
                  Зареєструватися
                </button>
                <button type="button" className="closeButton" onClick={closeLoginPopup}>
                  <img
                    src="https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png"
                    width="30"
                    height="30"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
