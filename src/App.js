import React, { useEffect } from "react";
import { TextInput, Keyboard, Button } from "react-native";
import './App.css';
const tg = window.telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    // Добавьте свой код здесь
  }

  const handleButtonClick = (genre) => {
    console.log(`Кнопка нажата для жанра: ${genre}`);
    switch (genre) {
      case "Топ 100":
        window.Расположение.href = "top100.html";
        break;
      case "Поп":
        window.Расположение.href = "pop.html";
        break;
      case "Рок":
        window.Расположение.href = "rock.html";
        break;
      default:
        break;
    }
  }

  const handleSearchPress = () => {
    Keyboard.dismiss(); // Закрываем клавиатуру
    // Добавьте свой код для открытия клавиатуры Android
  }

  return (
    <div className="App">
      <header className="center-header">
        <h1 className="header-text">Выберите жанр</h1>
      </header>
      <div className="genres">
        <div className="genre">
          <button className="invisible-button" onClick={() => handleButtonClick("Топ 100")}>
            <img className="жанровое изображение" src="топ100.jpg" alt="Топ 100"/>
            <h2>Топ 100</h2>
          </button>
        </div>
        <div className="genre">
          <button className="невидимая кнопка" onClick={() => handleButtonClick("Поп")}>
            <img className="изображение жанра" src="pop.jpg" alt="Поп"/>
            <h2>Поп</h2>
          </button>
        </div>
        <div className="genre">
          <button className="невидимая кнопка" onClick={() => handleButtonClick("Рок")}>
            <img className="genre-image" src="rock.jpg" alt="Рок"/>
            <h2>Рок</h2>
          </button>
        </div>
      </div>
      <div>
        <h2>Ниже находятся три картинки:</h2>
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </div>
      <TextInput
        style={{ marginTop: 20, paddingHorizontal: 10, height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Поиск"
        onPressIn={handleSearchPress}
      />
    </div>
  );
}

export default App;
