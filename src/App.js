import React from 'react';
import './App.css';

function Button({ iconSrc, text, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            <img src={iconSrc} alt="" className="icon" />
            <span className="text">{text}</span>
        </button>
    );
}

function App() {
    const goToPersonalArea = () => {
        window.location.href = "/Personal area.html"; // Замените на путь к вашему HTML-файлу Personal area.html
    };

    return (
        <div className="container">
            <Button iconSrc="1674365337_3-31.png" text="Профиль" onClick={goToPersonalArea} />
            <Button iconSrc="kisspng-computer-icons-clip-art-openclipart-magnifying-gla-5d31cfdb595331.9238955815635455633659.png" text="Поиск" />
            <Button iconSrc="icons8-чат-64.png" text="Чат" />
        </div>
    );
}

export default App;
