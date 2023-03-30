import style from "../card/Card.module.css";
import style2 from "../Form/Form.module.css";
import style3 from "./Detail.module.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const URL_BASE = "https://localhost:3001/rickandmorty"
  const { detailId } = useParams();

  useEffect(() => {
  
    axios.get(`${URL_BASE}/detail/${detailId}`)
    .then((response) => setCharacter(response.data));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style3.ContainerDetail}>
      <div className={style2.containerButton}>
          <Link className={style2.button} to="/home">Home</Link>
      </div>
      {character.name ? (
        <div className={style.divContenedor}>
          <div className={style.divContenedorImg}>
            <img
              className={style.imageCard}
              src={character.image}
              alt={character.name}
            />
          </div>
          <div className={style.divContenedorInfo}>
            <h2 className={style.linkCard}>{character.name}</h2>
            <p className={style.infoCard}>{character.status}</p>
            <p className={style.infoCard}>{character.species}</p>
            <p className={style.infoCard}>{character.gender}</p>
            <p className={style.infoCard}>{character.origin?.name}</p>
          </div>
        </div>
      ) : (
        <h1 className={style3.loading}>Loading...</h1>
      )}
    </div>
  );
};

export default Detail;
