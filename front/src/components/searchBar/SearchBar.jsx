import style from "./SearchBar.module.css";
import styled from "../nav/Nav.module.css"
import { useState } from "react";
import {Link} from 'react-router-dom';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const idAleatorio = (max = 827, min = 1) => {
    const numeroAleatorio = Math.floor(Math.random() * max + min);
    return numeroAleatorio;
  };

  return (
    <div className={styled.containerLinks}>
      <input type="search" onChange={handleChange} className={style.inputSearch}/>
      <Link onClick={() => onSearch(id)} to="/home"><span className={styled.Links}>Agregar</span></Link>
      <Link onClick={() => {onSearch(idAleatorio())}} to="/home"><span className={styled.Links}>Aleatorio</span></Link>
    </div>
  );
}
