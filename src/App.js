import React, { useEffect } from "react";
import './App.css';
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    // Add your code here
  }

  return (
    <div className="App">
      <header className="center-header">
        <h1 className="header-text">Выберите жанр</h1>
      </header>
      <div className="genres">
        <div className="genre">
          <img className="genre-image" src="top100.jpg" alt="Топ 100"/>
          <h2>Топ 100</h2>
        </div>
        <div className="genre">
          <img className="genre-image" src="pop.jpg" alt="Поп"/>
          <h2>Поп</h2>
        </div>
        <div className="genre">
          <img className="genre-image" src="rock.jpg" alt="Рок"/>
          <h2>Рок</h2>
        </div>
      </div>
      {/* Добавьте другие жанры здесь */}
    </div>
  );
}

export default App;
