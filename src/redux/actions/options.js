import { INC_LOADIND, DEC_LOADIND } from "./loading";



const types = {
    GET_GENRES: "GET_GENRES",
    GET_GENRES_SUCCESS: "GET_GENRES_SUCCESS",
    GET_GENRES_FAILURE: "GET_GENRES_FAILURE",
    UPDATE_TYPE: "UPDATE_TYPE",
    UPDATE_GENRE: "UPDATE_GENRE"
}

export function getGenreSuccess(res, type) {
    return {
        type: types.GET_GENRES_SUCCESS,
        data: res.genres,
        dataType: type
    }
}

export function getGenres(type) {
    return function (dispatch) {
        dispatch(INC_LOADIND());
        return fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=cc25576613869a6f70db3a1f599b2fb4&language=en-US`)
            .then(res => res.json())
            .then(res => {
                dispatch(getGenreSuccess(res, type));
                dispatch(DEC_LOADIND());
            });
    };
}


export function updateType(value) {
    return {
        type: types.UPDATE_TYPE,
        value
    }
}

export function udpateGenre(id) {
    return {
        type: types.UPDATE_GENRE,
        value: id
    }
}

export default types;