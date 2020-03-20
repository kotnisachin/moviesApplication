import initialState from "./initialState";
import actionsGenre from "../actions/options";

export default function (state = initialState.options, action) {
    switch (action.type) {
        case actionsGenre.GET_GENRES_SUCCESS:
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

        default:
            return state;
    }
}