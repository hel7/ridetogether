import React, { useState } from 'react';
import './App.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios at the top of your file
import Profile from './Profile';



function App() {
  const [closingPopup, setClosingPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const firebaseConfig = {
    apiKey: "AIzaSyBg0NFcia2pZzTqnG0yWKzPpluhFrNkvBU",
    authDomain: "ridetogether-387812.firebaseapp.com",
    projectId: "ridetogether-387812",
    storageBucket: "ridetogether-387812.appspot.com",
    messagingSenderId: "871429650227",
    appId: "1:871429650227:web:4b438e82b65732fdda7046",
    measurementId: "G-SY99FWBSWB"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Аутентифікація успішна:', user);
        navigate('/Profile');
      })
      .catch((error) => {
        console.error('Помилка аутентифікації:', error);
      });
  };
  
  const handleRegister = (event) => {
    event.preventDefault();
    const login = event.target.elements.login.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
  
    axios.post(process.env.REACT_APP_API_URL + '/users/register', {
      login,
      email,
      password,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };
  
  const handleLogin = (event) => {
    event.preventDefault();
    const login = event.target.elements.login.value;
    const password = event.target.elements.password.value;
  
    axios.post(process.env.REACT_APP_API_URL + '/users/login', {
      login,
      password,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };
  

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
            <form onSubmit={handleRegister}>
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
             <input
              type={showPassword ? 'text' : 'password'}
              id="password"
             />
              <label htmlFor="password-repeat">
                Повторіть пароль
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password-repeat"
              />

              <label htmlFor="show-password" className="pass">
                Показати пароль
              <input
                type="checkbox"
                id="show-password"
                onChange={() => setShowPassword(!showPassword)}
              />
              </label>

              <div className="popup-buttons">
                <button type="submit" className="button">
                  Зареєструватися
                </button>
                <div className="textCent">
                  <label id="text">Або</label>
                </div>
                <button className="button" type="button" onClick={handleGoogleSignIn}>Зареєструватися через Google</button>
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
            <form onSubmit={handleLogin}>
              <label htmlFor="login">Логін</label>
              <input type="text" id="login" />
              <label htmlFor="password-repeat">
                Пароль
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password-repeat"
              />

              <label htmlFor="show-password" className="pass">
                Показати пароль
              <input
                type="checkbox"
                id="show-password"
                onChange={() => setShowPassword(!showPassword)}
              />
              </label>
              <div className="popup-buttons">
                <button type="submit" className="button">
                  Увійти
                </button>
                <button className="button" type="button" onClick={handleGoogleSignIn}>Ввійти через Google</button>
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

export default function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}