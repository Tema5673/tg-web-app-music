import React, { useState } from "react";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние открытия меню

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

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen); // Изменение состояния открытия меню при каждом нажатии
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
          >
            <img className="genre-image" src="top100.jpg" alt="Топ 100" />
          </button>
          <h2 className="center-text">Топ 100</h2>
        </div>
        <div className="genre">
          <button
            className="genre-button"
            onClick={() => handleButtonClick("Поп")}
          >
            <img className="genre-image" src="pop.jpg" alt="Поп" />
          </button>
          <h2 className="center-text">Поп</h2>
        </div>
        <div className="genre">
          <button
            className="genre-button"
            onClick={() => handleButtonClick("Рок")}
          >
            <img className="genre-image" src="rock.jpg" alt="Рок" />
          </button>
          <h2 className="center-text">Рок</h2>
        </div>
      </div>
      <div className="search-container">
        {isMenuOpen && (
          <div className="menu">
            <input type="text" placeholder="Введите запрос" />
            <button>Поиск</button>
          </div>
        )}
      </div>
      <div className="custom-button" style={{ top: "50px", left: "50%" }}>
        {!isMenuOpen && (
          <button className="burger-menu" onClick={handleMenuOpen}>
            <img src="911498.png" alt="burger-menu" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
