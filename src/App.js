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
                    <img src="path_to_image" alt="Жанр 1" />
                    <h2>Жанр 1</h2>
                </div>
                <div className="genre">
                    <img src="path_to_image" alt="Жанр 2" />
                    <h2>Жанр 2</h2>
                </div>
                <div className="genre">
                    <img src="path_to_image" alt="Жанр 3" />
                    <h2>Жанр 3</h2>
                </div>
                {/* Добавьте другие жанры здесь */}
            </div>
            <button onClick={onClose}>Кнопка</button>
        </div>
    );
}

export default App;
