import initialState from "./initialState";
import types from "../actions/options";

export default function (state = initialState.options, action) {
    switch (action.type) {
        case types.GET_GENRES_SUCCESS:
            if (action.dataType === "movie")
                return {
                    ...state,
                    genreMovieList: action.data
                };
            else
                return {
                    ...state,
                    genreTvList: action.data
                };
        case types.UPDATE_TYPE:
            return {
                ...state,
                type: action.value
            }
        case types.UPDATE_GENRE:
            return {
                ...state,
                genre: action.value
            }
        default:
            return state;
    }
}