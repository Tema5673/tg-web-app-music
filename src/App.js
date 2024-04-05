import React, { useEffect, useState } from "react";
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const [selectedGenre, setSelectedGenre] = useState(null);

    const onClose = () => {
        // Добавьте ваш код для обработки события закрытия здесь
    }

    const handleGenreClick = (genre) => {
        // Добавьте ваш код для обработки события клика по жанру здесь
        setSelectedGenre(genre);
    }

    const renderMenu = () => {
        // Добавьте ваш код для отображения соответствующего меню здесь
        if (selectedGenre === "Топ 100") {
            return (
                <div>
                    {/* Ваше меню для жанра "Топ 100" */}
                </div>
            );
        } else if (selectedGenre === "Поп") {
            return (
                <div>
                    {/* Ваше меню для жанра "Поп" */}
                </div>
            );
        } else if (selectedGenre === "Рок") {
            return (
                <div>
                    {/* Ваше меню для жанра "Рок" */}
                </div>
            );
        } else {
            return null;
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
            {renderMenu()}
        </div>
    );
}

export default App;
