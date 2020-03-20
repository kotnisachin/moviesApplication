import { INC_LOADIND, DEC_LOADIND } from "./loading";


const types = {
    GET_LIST_SUCCESS: "GET_LIST_SUCCESS"
}
export default types;

export function getSuccess(res) {
    return {
        type: types.GET_LIST_SUCCESS,
        list: res.results,
        page: res.page
    }

}

export function getItems(type, category, page) {
    return function (dispatch) {
        dispatch(INC_LOADIND());
        return fetch(`https://api.themoviedb.org/3/${type}/${category}?api_key=cc25576613869a6f70db3a1f599b2fb4&language=en-US&page=${page}`)
            .then(res => res.json())
            .then(res => {
                dispatch(getSuccess(res));
                dispatch(DEC_LOADIND());
            });
    };
}
