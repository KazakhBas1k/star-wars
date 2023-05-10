import { createContext, useEffect, useState, useRef } from "react";
import './App.scss';
import Slider from './components/Slider';

export const SliderContext = createContext();

function App() {

  const [url, setUrl] = useState("https://swapi.dev/api/people/");
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("Characters");
  const slider = useRef(null);
  const [position, setPosition] = useState();
  const [searchValue, setSearchValue] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setItems(data);
      setIsLoading(false);
    }
    fetchData();
    setPosition(0);
    resPos();
  }, [url]);

  function resPos() {
    slider.current.childNodes.forEach((element) => {
      element.style = 'transform: translateX(0)';
    });
  }

  function chooseSection(e) {
    switch (e.target.textContent) {
      case "Characters":
        setUrl("https://swapi.dev/api/people/");
        setTitle("Characters");
        break;
      case "Planets":
        setUrl("https://swapi.dev/api/planets/");
        setTitle("Planets");
        break;
      case "Starships":
        setUrl("https://swapi.dev/api/starships/");
        setTitle("Starships");
        break;
    }
    setActive(false)
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="logo">S</div>
            <nav className="nav">
              <ul className={active ? "nav__list active" : "nav__list"}>
                <li>
                  <button onClick={chooseSection} className="nav__link">
                    Characters
                  </button>
                </li>
                <li>
                  <button onClick={chooseSection} className="nav__link">
                    Planets
                  </button>
                </li>
                <li>
                  <button onClick={chooseSection} className="nav__link">
                    Starships
                  </button>
                </li>
              </ul>
            </nav>
            <div className="search">
              <img src="./img/search.svg" alt="search" />
              <input
                className="input"
                onChange={onChangeSearchInput}
                value={searchValue}
                type="search"
                placeholder="search..."
              />
            </div>
            <div
              className={active ? "burger__btn active" : "burger__btn"}
              onClick={() => {
                active ? setActive(false) : setActive(true);
              }}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <h1>{title}</h1>
          <SliderContext.Provider
            value={{
              items,
              isLoading,
              title,
              slider,
              position,
              setPosition,
              searchValue,
              setSearchValue,
            }}
          >
            <Slider />
          </SliderContext.Provider>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
