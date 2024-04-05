import React, { useEffect } from "react";
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {

    }

    return (
        <div className="App">
            <div className="image-container">
                <img className="left-image" src="/left-image.jpg" alt="Картинка слева" />
                <img className="center-image" src="/center-image.jpg" alt="Картинка посередине" />
                <img className="right-image" src="/right-image.jpg" alt="Картинка справа" />
            </div>
            <header className="center-header">
                <h1 className="header-text">Выберите жанр</h1>
            </header>
            <div className="genres">
                <button className="genre-button">Кнопка 1</button>
                <button className="genre-button">Кнопка 2</button>
                <button className="genre-button">Кнопка 3</button>
            </div>
            {/* Добавьте другие кнопки здесь */}
        </div>
    );
}

export default App;
