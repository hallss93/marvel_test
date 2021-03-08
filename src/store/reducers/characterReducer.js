import { LOCATION_CHANGE } from "react-router-redux";
import actionType from "../actionsType";

const initialValue = {
    characters: null,
    character: null,
    error: null,
};

export default function character(state = initialValue, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return initialValue;
        case actionType.character.fetchSuccess:
            return {
                ...state,
                characters: action.payload,
                error: null,
            };
        case actionType.character.fetchFailure:
            return {
                ...state,
                error: action.payload,
            };
        case actionType.character.showSuccess:
            return {
                ...state,
                character: action.payload,
                error: null,
            };
        case actionType.character.showFailure:
            return {
                ...state,
                error: action.payload,
                character: null,
            };
        default:
            return state;
    }
}
