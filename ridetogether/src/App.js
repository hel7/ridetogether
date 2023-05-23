import React, { useState } from 'react';
import './App.css';

function App() {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const toggleRegisterPopup = () => {
    setShowRegisterPopup(!showRegisterPopup);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  const openRegisterPopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
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
        <div className="popup">
          <div className="popup-content">
            <h2>Реєстрація</h2>
            <form>
              <label htmlFor="name">Ім'я</label>
              <input type="text" id="name" />

              <label htmlFor="email">Електронна пошта</label>
              <input type="email" id="email" />

              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" />
              <div className="popup-buttons">
                <button className="button">Зареєструватися</button>
                <button className="closeButton" onClick={toggleRegisterPopup}>
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
        <div className="popup">
          <div className="popup-content">
            <h2>Авторизація</h2>
            <form>
              <label htmlFor="login">Логін</label>
              <input type="text" id="login" />

              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" />
              <div className="popup-buttons">
                <button className="button">Увійти</button>
                <button className="button">Ввійти через Google</button>
                <label htmlFor="text">
                  Або
                </label>
                <button className="button" onClick={openRegisterPopup}>
                  Зареєструватися
                </button>
                <button className="closeButton" onClick={closeLoginPopup}>
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
