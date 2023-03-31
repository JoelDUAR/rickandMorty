import { useDispatch, useSelector } from "react-redux";
import styled from "./Favorites.module.css";
import {filterCards, orderCards, } from "../../redux/actions"
import Card from "../card/Card";



const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  
const dispatch = useDispatch();
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  };

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
  };

  return (
    <div>
      <div className={styled.containerFilter}>
      <select name="filter" onChange={handleFilter}>
      <option value='order' disabled='disabled' >Order By</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </select>
      <select name="order" onChange={handleOrder}>
      <option value='order' disabled='disabled' >Filter By</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="Unknown">Unknown</option>
        <option value="allCharacter">All Character</option>
      </select>
      </div>
      <div className={styled.containerFavorites}>
        {myFavorites?.map(({id, name, species, gender, image}) => {
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
