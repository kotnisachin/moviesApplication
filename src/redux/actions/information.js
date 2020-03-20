import { INC_LOADIND, DEC_LOADIND } from "./loading";


const types = {
    GET_LIST_SUCCESS: "GET_LIST_SUCCESS",
    UPDATE_SEARCH_VALUE: "UPDATE_SEARCH_VALUE",
}
export default types;

export function getSuccess(res) {
    return {
        type: types.GET_LIST_SUCCESS,
        list: res.results,
        page: res.page
    }
}

export function updateSearchValue(value) {
    return {
        type: types.UPDATE_SEARCH_VALUE,
        value
    }
}

export function getItems(type, category, page, genre) {
    return function (dispatch) {
        dispatch(INC_LOADIND());
        return fetch(`https://api.themoviedb.org/3/discover/${type}?api_key=cc25576613869a6f70db3a1f599b2fb4`
            + `&language=en-US&sort_by=${category}.desc&page=${page}&with_genres=${genre || ""}`)
            .then(res => res.json())
            .then(res => {
                dispatch(getSuccess(res));
                dispatch(DEC_LOADIND());
            });
    };
}

export function getSearchItems(type, value, page) {
    return function (dispatch) {
        dispatch(INC_LOADIND());
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=cc25576613869a6f70db3a1f599b2fb4&language=en-US&query=${value}&page=${page}&include_adult=false`)
            .then(res => res.json())
            .then(res => {
                dispatch(updateSearchValue(value));
                dispatch(getSuccess(res, type));
                dispatch(DEC_LOADIND());
            });
    };
}