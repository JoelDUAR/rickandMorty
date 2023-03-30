import {ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER} from "./actions-types"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}


function rootReducer(state = initialState, action){
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state, myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            };
        case REMOVE_FAVORITE:
          
            return{
                ...state, myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload)
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
            
        default:
           return {...state};
    }
}
export default rootReducer;