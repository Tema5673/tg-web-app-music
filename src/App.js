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

    const handleMenuClick = (menuId) => {
        // Добавьте ваш код для обработки события клика по меню здесь
        // В зависимости от menuId, вы можете открыть соответствующее меню без картинок и текста
        if (menuId === "menu1") {
            // Откройте меню 1 без картинок и текста
            // Здесь вы можете добавить свое собственное содержимое меню 1
            console.log("Нажата кнопка меню 1");
        } else if (menuId === "menu2") {
            // Откройте меню 2 без картинок и текста
            // Здесь вы можете добавить свое собственное содержимое меню 2
            console.log("Нажата кнопка меню 2");
        } else if (menuId === "menu3") {
            // Откройте меню 3 без картинок и текста
            // Здесь вы можете добавить свое собственное содержимое меню 3
            console.log("Нажата кнопка меню 3");
        }
    }

    return (
        <div className="App">
            <header className="center-header">
                <h1 className="header-text">Выберите жанр</h1>
            </header>
            <div className="genres">
                <div className="genre" onClick={() => handleMenuClick("menu1")}>
                    <img className="genre-image" src="/top100.jpg" alt="Топ 100"/>
                    <h2>Топ 100</h2>
                    <button className="invisible-button" onClick={(e) => e.stopPropagation()}></button>
                </div>
                <div className="genre" onClick={() => handleMenuClick("menu2")}>
                    <img className="genre-image" src="/pop.jpg" alt="Поп"/>
                    <h2>Поп</h2>
                    <button className="invisible-button" onClick={(e) => e.stopPropagation()}></button>
                </div>
                <div className="genre" onClick={() => handleMenuClick("menu3")}>
                    <img className="genre-image" src="/rock.jpg" alt="Рок"/>
                    <h2>Рок</h2>
                    <button className="invisible-button" onClick={(e) => e.stopPropagation()}></button>
                </div>
            </div>
            {/* Добавьте другие меню здесь */}
        </div>
    );
}

export default App;
