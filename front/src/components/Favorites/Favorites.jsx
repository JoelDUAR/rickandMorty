import { useDispatch, useSelector } from "react-redux";
import styled from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../card/Card";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  const handleClick = (event)=>{
    const {name, value} = event.target;
    switch (name) {
      case "order":
        return dispatch(orderCards(value));
      case "filter":
        return dispatch(filterCards(value));
      default:
        break;
    }
  }

  return (
    <div>
      <div className={styled.containerFilter}>
        <select name="order" onClick={handleClick}>
        <option value='order' disabled='disabled' >Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onClick={handleClick}>
        <option value='order' disabled='disabled' >Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styled.containerFavorites}>
        {myFavorites?.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
