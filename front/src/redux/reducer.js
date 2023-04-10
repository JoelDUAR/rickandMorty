import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ORDER,
  FILTER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  GET_FAVORITES,
  LOGIN,
  LOGOUT,
} from "./actions-types";

const initialState = {
  User: {access: false},
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.allCharacters, action.payload]
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case FILTER:
      const filterByGender = [...state.allCharacters].filter((char)=> char.gender.toLowerCase() === action.payload.toLowerCase());
      return {...state, myFavorites: filterByGender}

    case ORDER:
      const filterByOrder = [...state.allCharacters].sort((a,b)=>{
        if(a.id > b.id){
          return action.payload === "Ascendente" ? 1 : -1;
        } else if(a.id < b.id){
          return action.payload === "Descendente" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return {...state, myFavorites: filterByOrder}
    case GET_CHARACTER_DETAIL:
      return {
        ...state,
        characterDetail: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    case GET_FAVORITES:
      return{
        ...state, myFavorites: action.payload
      };
    case LOGIN:
      return{
        ...state, User: action.payload
      }
    case LOGOUT:
      return{
        ...state, User: action.payload
      }
    default:
      return { ...state };
  }
}
export default rootReducer;
