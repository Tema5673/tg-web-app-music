import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: 5, left: 10 });
  const [buttonSize, setButtonSize] = useState(100); // Исходный размер кнопки
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние открытия меню
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearch = (query) => {
    setSearchResults(["Результат 1", "Результат 2", "Результат 3"]);
  };

  const handleButtonClick = (genre) => {
    console.log(`Кнопка нажата для жанра: ${genre}`);
    switch (genre) {
      case "Top 100":
        window.location.href = "top100.html";
        break;
      case "Pop":
        window.location.href = "pop.html";
        break;
      case "Rock":
        window.location.href = "rock.html";
        break;
      default:
        break;
    }
  };

  const increaseButtonSize = () => {
    setButtonSize((prevSize) => prevSize + 10); // Увеличение размера кнопки на 10 пикселей
  };

  return (
    <div className="App">
      {isSearchActive && (
        <div className="search-bar">
          <input type="text" placeholder="Название трека, исполнитель" />
          <button className="search-button" onClick={() => handleSearch("запрос")}>
            Поиск
          </button>
          {searchResults.length > 0 && (
            <div className="search-results">
              <h3>Результаты поиска:</h3>
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      <button
        className="Search"
        style={{ width: buttonSize, height: buttonSize }}
        onClick={handleSearchClick}
      >
        <img src="noun_41373.png" alt="Поиск" />
      </button>

      <header className="center-header">
        <h1 className="header-text">Выберите жанр</h1>
      </header>
      <div className="genres">
        <div className="genre">
          <button className="genre-button" onClick={() => handleButtonClick("Top 100")}>
            <img className="genre-image" src="top100.jpg" alt="Top 100" />
          </button>
          <h2 className="center-text">Top 100</h2>
        </div>
        <div className="genre">
          <button className="genre-button" onClick={() => handleButtonClick("Pop")}>
            <img className="genre-image" src="pop.jpg" alt="Pop" />
          </button>
          <h2 className="center-text">Pop</h2>
        </div>
        <div className="genre">
          <button className="genre-button" onClick={() => handleButtonClick("Rock")}>
            <img className="genre-image" src="rock.jpg" alt="Rock" />
          </button>
          <h2 className="center-text">Rock</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
