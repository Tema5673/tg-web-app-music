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
                    <img src={require("./top100.jpg")} alt="Топ 100" />
                    <button className="invisible-button" onClick={(e) => e.stopPropagation()}>Перейти</button>
                </div>
                <div className="genre" onClick={() => handleMenuClick("menu2")}>
                    <img src={require("./pop.jpg")} alt="Поп" />
                    <button className="invisible-button" onClick={(e) => e.stopPropagation()}>Перейти</button>
                </div>
                <div className="genre" onClick={() => handleMenuClick("menu3")}>
                    <img src={require("./rock.jpg")} alt="Рок" />
                    <button className="invisible-button" onClick={(e) => e.stopPropagation()}>Перейти</button>
                </div>
            </div>
            {/* Добавьте другие меню здесь */}
        </div>
    );
}

export default App;
