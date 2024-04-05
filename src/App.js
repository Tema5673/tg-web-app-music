import React, { useEffect } from "react";
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        // Add your code to handle the close event here
    }

    const handleGenreClick = (genre) => {
        // Add your code to handle the genre click event here
        if (genre === "Топ 100") {
            window.open("https://example.com/top100"); // Replace with the actual URL
        } else if (genre === "Поп") {
            window.open("https://example.com/pop"); // Replace with the actual URL
        } else if (genre === "Рок") {
            window.open("https://example.com/rock"); // Replace with the actual URL
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
            {/* Add other genres here */}
        </div>
    );
}

export default App;
