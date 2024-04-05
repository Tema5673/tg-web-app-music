import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Top100Page from "./Top100Page";
import PopPage from "./PopPage";
import RockPage from "./RockPage";

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        tg.ready();
    }, []);

    const onClose = () => {
        // Добавьте ваш код для обработки события закрытия здесь
    }

    return (
        <Router>
            <div className="App">
                <header className="center-header">
                    <h1 className="header-text">Выберите жанр</h1>
                </header>
                <div className="genres">
                    <Link to="/top100" className="genre">
                        <img className="genre-image" src="/top100.jpg" alt="Топ 100"/>
                        <h2>Топ 100</h2>
                    </Link>
                    <Link to="/pop" className="genre">
                        <img className="genre-image" src="/pop.jpg" alt="Поп"/>
                        <h2>Поп</h2>
                    </Link>
                    <Link to="/rock" className="genre">
                        <img className="genre-image" src="/rock.jpg" alt="Рок"/>
                        <h2>Рок</h2>
                    </Link>
                </div>
                {/* Добавьте другие жанры здесь */}
                <Switch>
                    <Route path="/top100">
                        <Top100Page />
                    </Route>
                    <Route path="/pop">
                        <PopPage />
                    </Route>
                    <Route path="/rock">
                        <RockPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
