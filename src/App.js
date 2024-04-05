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
            <h1>Выберите жанр</h1>
            <div className="genres">
                <div className="genre">
                    <img src="Топ-100.jpg" alt="Топ-100" />
                    <h2>Жанр 1</h2>
                </div>
                <div className="genre">
                    <img src="Поп.jpg" alt="Поп" />
                    <h2>Жанр 2</h2>
                </div>
                <div className="genre">
                    <img src="Рок.jpg" alt="Рок" />
                    <h2>Жанр 3</h2>
                </div>
                {/* Добавьте другие жанры здесь */}
            </div>
            <button onClick={onClose}>Кнопка</button>
        </div>
    );
}

export default App;
