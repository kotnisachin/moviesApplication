import initialState from "./initialState";
import types from "../actions/information";

export default function (state = initialState.information, action) {
    switch (action.type) {
        case types.GET_LIST_SUCCESS:
            if (action.page === 1)
                return {
                    ...state,
                    list: [...action.list],
                    page: action.page
                };
            else
                return {
                    ...state,
                    list: [...state.list, ...action.list],
                    page: action.page
                };
        case types.UPDATE_SEARCH_VALUE:
            return {
                ...state,
                search: action.value
            };
        default:
            return state;
    }
}