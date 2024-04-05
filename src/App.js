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
                <div className="genre">
                    <img className="genre-image" src="/top100.jpg" alt="Топ 100"/>
                    <h2>Топ 100</h2>
                </div>
                <div className="genre">
                    <img className="genre-image" src="/pop.jpg" alt="Поп"/>
                    <h2>Поп</h2>
                </div>
                <div className="genre">
                    <img className="genre-image" src="/rock.jpg" alt="Рок"/>
                    <h2>Рок</h2>
                </div>
            </div>
            {/* Добавьте другие жанры здесь */}
        </div>
    );
}

export default App;
