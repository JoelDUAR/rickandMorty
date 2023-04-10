import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ORDER,
  FILTER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  GET_FAVORITES,
  LOGIN,
  LOGOUT
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

export const loginAction = (email, password) => {

  return async function(dispatch){
    try {
      const response = await axios.get(`${URL_BASE}/rickandmorty/login?email=${email}&password=${password}`);
      console.log(response.data);
      dispatch({type: LOGIN, payload: response.data});
      
    } catch (error) {
        console.error({error: error.message})
    }
  }
}

export const logoutAction = () => {
  return function(dispatch){
      dispatch({type: LOGOUT, payload:{ access: false}}) 
  }
}



/* export const addFavorites = (character, idUser) => {
  return async function(dispatch) {
    try {
      const data = await fetch(`${URL_BASE}/rickandmorty/fav?idUser=${idUser}`,{
        method: 'POST',
        body: JSON.stringify(character),
        headers: {
          "Content-type":"application/json; charset=utf-8"
        }
      })
      .then((response) => response.json())

      if(data) dispatch({ type: ADD_FAVORITE, payload: data})
    } catch (error) {
      console.log({error: error.message})
    }
  }
};

export const removeFavorite = (id, idUser) => {
  return async function (dispatch) {
 try {
  const data = await fetch(`${URL_BASE}/rickandmorty/fav?idUser=${idUser}`,{
    method: 'POST',
  }).then((response) => response.json())

  if(data.success) dispatch({ type: REMOVE_FAVORITE, payload: id })
  }catch (error) {
    console.log({error: error.message})
  }
  }
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

export const getFavorites = (idUser) => {
  return async function(dispatch){
    try {
      const response = await axios.get(`${URL_BASE}/rickandmorty/fav?idUser=${idUser}`);
      if(response.data) dispatch({type: GET_FAVORITES, payload: response.data})
    } catch (error) {
      console.log({error: error.message})
    }
  }
}

 */