import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { removeFavorite} from "../../redux/actions";
import axios from "axios"
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  removeFavorite,
  myFavorites,
}) {

  const [isFav, setIsFav] = useState(false);

  const addFavorite = (character) => {
    axios.post("http://localhost:3001/rickandmorty/fav", character)
    .then((response) => console.log("ok"));
  }

  const handleFavorite = () => {
    if (isFav) {
      removeFavorite(id);
      setIsFav(false);
      
    } else {
      setIsFav(true);
      addFavorite({id, name, species, gender, image});
    }
  };

  useEffect(() => {
    myFavorites?.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [ myFavorites]);

  return (
 
   
   
    <div className={style.divContenedor}>
    {
      isFav ? (
         <button className={style.buttonFav} onClick={handleFavorite}>❤️</button>
      ) : (
         <button className={style.buttonFav} onClick={handleFavorite}>🤍</button>
      )
   }
      <div className={style.divContenedorImg}>
        <img className={style.imageCard} src={image} alt="Foto" />
      </div>
      <div className={style.divContenedorInfo}>
        <Link className={style.linkCard} to={`/detail/${id}`}>
          <h3>Name: {name}</h3>
        </Link>
        <h4 className={style.infoCard}>Species: {species}</h4>
        <h4 className={style.infoCard}>Genero: {gender}</h4>
        <button className={style.btnClose} onClick={() => onClose(id)}>
          X
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {dispatch(removeFavorite(id));},
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
