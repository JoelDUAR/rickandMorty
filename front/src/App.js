import style from "./App.css";
import Cards from "./components/cards/Cards";
import Nav from "./components/nav/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import FormSignUp from "./components/FormSignUp/FormSignUp";
import Favorites from "./components/Favorites/Favorites";
import { React, useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Detail from "./components/Detail/Detail";
import { useDispatch, useSelector } from "react-redux";
import {logoutAction} from "./redux/actions.js"


function App() {
 const user = useSelector((state) => state.User);
console.log(user)
 const dispatch = useDispatch();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

 async function login(userData) {
  const userAccess = await user;
  console.log(userAccess);
    if(userAccess) navigate("/home"); 
    if (!userAccess) alert("Usuario y/o password incorrectos");
 }
 
  window.onpopstate = function (event) {
    !user  && navigate("/");
  };

  useEffect(() => {
    // eslint-disable-next-line
    !user && navigate("/");
    // eslint-disable-next-line
  }, [user]);

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
    dispatch(logoutAction())
  };

  return (
    <div className={style.divApp}>
  
        {(location.pathname !== "/signup" && location.pathname !== "/") && (<Nav onSearch={onSearch} logout={logout} />)}

        <Routes>
          <Route path="/" element={<Form login={login} />}  />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/signup" element={ <FormSignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>

    </div>
  );
}

export default App;
