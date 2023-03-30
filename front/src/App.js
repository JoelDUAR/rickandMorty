import style from "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";
import { React, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "admin@hotmail.com";
  const password = "1password";
  const location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario y/o usuario incorrectos");
    }
  }
  
  window.onpopstate = function (event) {
    !access && navigate("/");
  };

  useEffect(() => {
    // eslint-disable-next-line
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje Repetido");
    }

    fetch(`${URL_BASE}/rickandmorty/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("No hay personajes con ese ID");
        }
      });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div className={style.divApp}>
      <div>
        {location.pathname !== "/" && (
          <Nav onSearch={onSearch} logout={logout} />
        )}

        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
