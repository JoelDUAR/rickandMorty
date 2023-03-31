import {
  REMOVE_FAVORITE,
  ORDER,
  FILTER,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
  GET_FAVORITES,
} from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  characterDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case FILTER:
      const filteredCharacters = state.allCharacters.filter((character) => {
        return character.gender === action.payload;
      });

      return { ...state, myFavorites: filteredCharacters };

    case ORDER:
      const orderById = [
        ...state.allCharacters.sort((a, b) => {
          if (action.payload === "Ascendente" && a.id < b.id) {
            return 1;
          } else if (action.payload === "Ascendente" && a.id > b.id) {
            return -1;
          } else if (action.payload === "Descendente" && a.id > b.id) {
            return 1;
          } else if (action.payload === "Descendente" && a.id < b.id) {
            return -1;
          } else {
            return 0;
          }
        }),
      ];

      return { ...state, myFavorites: orderById };
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

    default:
      return { ...state };
  }
}
export default rootReducer;
