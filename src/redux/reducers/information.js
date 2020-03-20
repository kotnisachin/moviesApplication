import initialState from "./initialState";
import types from "../actions/information";

export default function (state = initialState.information, action) {
    switch (action.type) {
        case types.GET_LIST_SUCCESS:
            return {
                ...state,
                list: action.list,
                page: action.page
            };
        default:
            return state;
    }
}