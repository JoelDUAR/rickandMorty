import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ORDER,
  FILTER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  GET_FAVORITES,
} from "./actions-types";
import axios from "axios";

const URL_BASE = "http://localhost:3001";

export const addFavorites = (character) => {
  return { type: ADD_FAVORITE, payload: character}
};

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, payload: id };
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER, payload: order };
};

export const getCharacterDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_BASE}/rickandmorty/detail/${id}`);
    dispatch({ type: GET_CHARACTER_DETAIL, payload: response.data });
  };
};
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getFavorites = () => {
  return async function(dispatch){
   const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
   dispatch({type: GET_FAVORITES, payload: response.data})
  }
}