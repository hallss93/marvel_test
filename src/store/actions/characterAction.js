import actionsType from "../actionsType";

export function fetch(data) {
    return {
        type: actionsType.character.fetch,
        payload: data,
    };
}

export function fetchSuccess(data) {
    return {
        type: actionsType.character.fetchSuccess,
        payload: data,
    };
}

export function fetchFailure(error) {
    return {
        type: actionsType.character.fetchFailure,
        payload: error,
    };
}

export function show(data) {
    return {
        type: actionsType.character.show,
        payload: data,
    };
}

export function showSuccess(data) {
    return {
        type: actionsType.character.showSuccess,
        payload: data,
    };
}

export function showFailure(error) {
    return {
        type: actionsType.character.showFailure,
        payload: error,
    };
}
