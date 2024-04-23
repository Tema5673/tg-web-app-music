import React from 'react';
import './App.css'; // Подключаем внешний файл стилей

function Button({ iconSrc, text }) {
    return (
        <button className="button">
            <img src={iconSrc} alt="" className="icon" />
            <span className="text">{text}</span>
        </button>
    );
}

function App() {
    return (
        <div className="container">
            <Button iconSrc="profile_icon.png" text="Профиль" />
            <Button iconSrc="search_icon.png" text="Поиск" />
            <Button iconSrc="chat_icon.png" text="Чат" />
        </div>
    );
}

export default App;
