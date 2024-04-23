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
            <Button iconSrc="1674365337_3-31.png" text="Профиль" />
            <Button iconSrc="kisspng-computer-icons-clip-art-openclipart-magnifying-gla-5d31cfdb595331.9238955815635455633659.png" text="Поиск" />
            <Button iconSrc="unnamed.png" text="Чат" />
        </div>
    );
}

export default App;
