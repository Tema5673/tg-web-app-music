import React, { useEffect } from "react";
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        // Добавьте ваш код для обработки события закрытия здесь
    }

    const handleGenreClick = (genre) => {
        // Добавьте ваш код для обработки события клика по жанру здесь
        if (genre === "Топ 100") {
            window.location.href = "/top100"; // Замените "/top100" на URL-адрес страницы "Топ 100" на вашем сайте
        } else if (genre === "Поп") {
            window.location.href = "/pop"; // Замените "/pop" на URL-адрес страницы "Поп" на вашем сайте
        } else if (genre === "Рок") {
            window.location.href = "/rock"; // Замените "/rock" на URL-адрес страницы "Рок" на вашем сайте
        }
    }

    return (
        <div className="App">
            <header className="center-header">
                <h1 className="header-text">Выберите жанр</h1>
            </header>
            <div className="genres">
                <div className="genre" onClick={() => handleGenreClick("Топ 100")}>
                    <img className="genre-image" src="/top100.jpg" alt="Топ 100"/>
                    <h2>Топ 100</h2>
                </div>
                <div className="genre" onClick={() => handleGenreClick("Поп")}>
                    <img className="genre-image" src="/pop.jpg" alt="Поп"/>
                    <h2>Поп</h2>
                </div>
                <div className="genre" onClick={() => handleGenreClick("Рок")}>
                    <img className="genre-image" src="/rock.jpg" alt="Рок"/>
                    <h2>Рок</h2>
                </div>
            </div>
            {/* Добавьте другие жанры здесь */}
        </div>
    );
}

export default App;
