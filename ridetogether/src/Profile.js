import React, { useState,useEffect} from 'react';
import './App.css';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import './Profile.css';


function Profile() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAcceptPopup, setAcceptPopup] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  document.onclick = (args) => {
    if (args.target.id === 'popup-background') {
      closeAcceptPopup();
    }
  };

  const closeAcceptPopup = () => {
    setCloseAnimation(true);
    setTimeout(() => {
      setAcceptPopup(false);
      setCloseAnimation(false);
    }, 500); 
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

  return (
    <div className="container">
      <header className="header">
  <div className="header-logo">
    <img src="Group 1.png" alt="Logo" />
    <h1 className="header-title">RideTogether</h1>
  </div>
  <div className="header-userinfo" style={{ position: 'relative' }}>
  {selectedPhoto ? (
    <img 
      className="user-photo" 
      src={URL.createObjectURL(selectedPhoto)} 
      alt="User" 
      onClick={() => setShowDropdown(!showDropdown)} 
    />
  ) : (
    <img 
      className="user-photo" 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Phase-250.jpg/768px-Phase-250.jpg" 
      alt="" 
      onClick={() => setShowDropdown(!showDropdown)} 
    />
  )}
  {showDropdown && ( 
    <ul  className="dropdown-menu" style={windowWidth <= 768 ? {margin: "-15px", marginTop: "25px"} : {margin: "10px", marginTop: "32px"}}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      </ul>
    )}
    </div>

    </header>
      <main className="main">
        <div className="main-info-profile">
          <h2 className ="namePage">Профіль</h2>
          <div className="profile-image">
        {selectedPhoto ? (
        <img className="photo-choose" src={URL.createObjectURL(selectedPhoto)} alt="Selected" />
        ) : (
        <img className="photo-choose" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Phase-250.jpg/768px-Phase-250.jpg" alt="" />
        )}
        </div>
          <label className="choose-photo-button" htmlFor="photo-input">
            Обрати фото
          <input
            id="photo-input"
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedPhoto(e.target.files[0])}
            style={{ display: 'none' }}
          />
          </label>
          <input className="input-field" type="text" placeholder="Логін:" />
          <input className="input-field" type="text" placeholder="Email" />
          <input className="input-field" type="text" placeholder="Номер телефону:" />
          <Datetime 
            id="birthdate"
            value={selectedDate}
            onChange={handleDateChange}
            dateFormat="DD/MM/YYYY"
            timeFormat={false}
            closeOnSelect={true}
            inputProps={{ readOnly: true, className: "input-field" }}
            isValidDate={(current) => current.isBefore(moment().subtract(18, 'years'), 'day')}
            renderInput={(props, openCalendar) => (
            <input {...props} placeholder="Дата народження:" onFocus={openCalendar} />
            )}
          />
         <h3>Контактна інформація</h3><h3>Вкажіть декілька номерів яким буде надіслана інформація у разі натискання кнопки SOS</h3>
         <input className="input-field" type="text" placeholder="Контактний телефон 1:" />
        <input className="input-field" type="text" placeholder="Контактний телефон 2:" />
        <button className="acceptChanges" onClick={() => setAcceptPopup(true)}>Зберегти зміни</button>
        {showAcceptPopup && (
        <div
          id="popup-background"
          className={`popup ${
          showAcceptPopup && !closeAnimation ? 'popup-appear' : 'popup-disappear'
        }`}
        >
          <div
          className={`popup-content ${
        showAcceptPopup && !closeAnimation ? 'popup-appear' : 'popup-disappear'
        }`}
          >
            <h2>Ви впевнені</h2>
            <form>
             <div className="popup-buttons"> 
                <div className="buttons-container">
                <button className="buttonAccept">Так</button>
                <button className="buttonDecine">Ні</button>
                </div>
                <button type="button" className="closeButton" onClick={closeAcceptPopup}>
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
      </main>
      <footer className="footer">
        <p>© 2023 RideTogether. Всі права захищені.</p>
      </footer>
    </div>
  );
}

export default Profile;
