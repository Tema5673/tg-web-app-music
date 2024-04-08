import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [buttonSize, setButtonSize] = useState(100); // Начальный размер кнопки

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
  };

  const handleButtonPositionChange = (e) => {
    const { top, left } = e.target.getBoundingClientRect();
    setButtonPosition({ top, left });
  };

  const increaseButtonSize = () => {
    setButtonSize((prevSize) => prevSize + 10); // Увеличение размера кнопки на 10 пикселей
  };

  return (
    <div className="App">
      <header className="center-header">
        <h1 className="header-text">Выберите жанр</h1>
      </header>
      <div className="genres">
        <div className="genre">
          <button
            className="genre-button"
            onClick={() => handleButtonClick("Топ 100")}
            onMouseEnter={handleButtonPositionChange}
          >
            <img className="genre-image" src="топ100.jpg" alt="Топ 100" />
          </button>
          <h2 className="center-text">Топ 100</h2>
        </div>
        <div className="genre">
          <button
            className="genre-button"
            onClick={() => handleButtonClick("Поп")}
            onMouseEnter={handleButtonPositionChange}
          >
            <img className="genre-image" src="pop.jpg" alt="Поп" />
          </button>
          <h2 className="center-text">Поп</h2>
        </div>
        <div className="genre">
          <button
            className="genre-button"
            onClick={() => handleButtonClick("Рок")}
            onMouseEnter={handleButtonPositionChange}
          >
            <img className="genre-image" src="rock.jpg" alt="Рок" />
          </button>
          <h2 className="center-text">Рок</h2>
        </div>
      </div>
      <div
        className="custom-button"
        style={{ top: buttonPosition.top, left: buttonPosition.left }}
      >
        <button
          style={{ width: buttonSize, height: buttonSize }}
          onClick={increaseButtonSize}
        >
          <img
            className="burger-menu grayed-out"
            src="911498.png"
            alt="Меню"
            style={{ width: buttonSize, height: buttonSize }}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
