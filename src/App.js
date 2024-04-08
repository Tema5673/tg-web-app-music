import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: 5, left: 10 });
  const [buttonSize, setButtonSize] = useState(100); // Начальный размер кнопки
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние открытия меню
  const [newButtonPosition, setNewButtonPosition] = useState({ top: 0, right: 0 });

  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

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

  const increaseButtonSize = () => {
    setButtonSize((prevSize) => prevSize + 10); // Увеличение размера кнопки на 10 пикселей
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen); // Изменение состояния открытия меню при каждом нажатии
  };

  return (
    <div className="App">
      {isSearchActive && (
        <div className="search-bar">
          <input type="text" placeholder="Введите запрос" />
          <button className="search-button">Поиск</button>
        </div>
      )}

      <button
        className="Search"
        style={{ width: buttonSize, height: buttonSize }}
        onClick={handleSearchClick} // Add onClick event handler
      >
        <img src="noun_41373.png" alt="Search" />
      </button>

      <header className="center-header">
        <h1 className="header-text">Выберите жанр</h1>
      </header>
      <div className="genres">
        <div className="genre">
          <button className="genre-button" onClick={() => handleButtonClick("Топ 100")}>
            <img className="genre-image" src="top100.jpg" alt="Топ 100" />
          </button>
          <h2 className="center-text">Топ 100</h2>
        </div>
        <div className="genre">
          <button className="genre-button" onClick={() => handleButtonClick("Поп")}>
            <img className="genre-image" src="pop.jpg" alt="Поп" />
          </button>
          <h2 className="center-text">Поп</h2>
        </div>
        <div className="genre">
          <button className="genre-button" onClick={() => handleButtonClick("Рок")}>
            <img className="genre-image" src="rock.jpg" alt="Рок" />
          </button>
          <h2 className="center-text">Рок</h2>
        </div>
      </div>
      <div className="custom-button" style={{ top: buttonPosition.top, left: buttonPosition.left }}>
        {isMenuOpen && (
          <iframe className="menu" src="menu.html" style={{ width: "50%", height: "100vh" }}></iframe>
        )}
        {!isMenuOpen && (
          <button className="burger-menu" style={{ width: buttonSize, height: buttonSize }} onClick={handleMenuOpen}>
            <img src="911498.png" alt="burger-menu" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
