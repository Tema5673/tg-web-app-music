import React, { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    // Добавьте свой код здесь
  }, []);

  const onClose = () => {
    // Добавьте свой код здесь
  }

  const handleButtonClick = (genre) => {
    console.log(`Кнопка нажата для жанра: ${genre}`);
    switch (genre) {
      case "Топ 100":
        window.location.href = "top100.html";
        break;
      case "Поп":
        window.location.href = "pop.html";
        break;
      case "Рок":
        window.location.href = "rock.html";
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="genres" style={{ marginTop: "200px" }}>
        <div className="genre">
          <button className="invisible-button" onClick={() => handleButtonClick("Топ 100")}>
            <img className="genre-image" src="top100.jpg" alt="Топ 100"/>
            <h2>Топ 100</h2>
          </button>
        </div>
        <div className="genre">
          <button className="invisible-button" onClick={() => handleButtonClick("Поп")}>
            <img className="genre-image" src="pop.jpg" alt="Поп"/>
            <h2>Поп</h2>
          </button>
        </div>
        <div className="genre">
          <button className="invisible-button" onClick={() => handleButtonClick("Рок")}>
            <img className="genre-image" src="rock.jpg" alt="Рок"/>
            <h2>Рок</h2>
          </button>
        </div>
      </div>
      <header className="center-header" style={{ marginTop: "-200px" }}>
        <h1 className="header-text">Выберите жанр</h1>
      </header>
    </div>
  );
}

export default App;
