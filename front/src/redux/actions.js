import {ADD_FAVORITE, REMOVE_FAVORITE, ORDER, FILTER} from "./actions-types"

export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, payload: id}
};

export const filterCards = (gender) => {
return {type: FILTER, payload: gender}
};

export const orderCards = (id) => {
    return {type: ORDER, payload: id}
    };
