import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonPosition, setButtonPosition] = useState({ top: 5, left: 10 });
  const [buttonSize, setButtonSize] = useState(100); // Начальный размер кнопки
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние открытия меню
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [username, setUsername] = useState("Player");

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleSearch = (query) => {
    setSearchResults(["Результат 1", "Результат 2", "Результат 3"]);
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
    setIsMenuOpen(true); // Открытие меню
    setButtonSize(100); // Сбросить размер кнопки до начального значения
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.style.width = "50px";
      img.style.height = "50px";
      const menu = document.querySelector(".menu");
      menu.innerHTML = ""; // Очистить содержимое меню
      menu.appendChild(img); // Добавить загруженную картинку в меню
    };
    reader.readAsDataURL(file);
  };

  const handleEditUserInfo = () => {
    const newUsername = prompt("Введите новый ник пользователя:");
    if (newUsername) {
      setUsername(newUsername);
    }
  };

  return (
    <div className="App">
      {isSearchActive && (
        <div className="search-bar">
          <input type="text" placeholder="Название трека, артиста" />
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
        <button className="burger-menu" style={{ width: buttonSize, height: buttonSize }} onClick={handleMenuOpen}>
          <img src="1675895563_grizly-club-p-lichnii-kabinet-klipart-14.png" alt="burger-menu" />
        </button>
      </div>
      {isMenuOpen && (
        <div className="menu">
          <h2 className="center-menu-text">Menu Text</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className="user-info">
            <p className="username">{username}</p>
            <img className="edit-icon" src="edit.png" alt="Изменить" onClick={handleEditUserInfo} />
          </div>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
      )}
    </div>
  );
}

export default App;
