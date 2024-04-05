import './App.css';
import { useEffect } from "react";
const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {

    }

    return (
        <div className="App">
            <header className="center-header">
                <h1 className="header-text">Выберите жанр</h1>
            </header>
            <div className="genres">
                <div className="genre">
                    <h2>Топ 100</h2>
                </div>
                <div className="genre">
                    <h2>Поп</h2>
                </div>
                <div className="genre">
                    <h2>Рок</h2>
                </div>
                {/* Добавьте другие жанры здесь */}
            </div>
        </div>
    );
}

export default App;
