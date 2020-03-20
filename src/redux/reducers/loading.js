import initialState from "./initialState";
import types from "../actions/loading";

export default function (state = initialState.loading, action) {
    switch (action.type) {
        case types.INC_LOADING_COUNT:
            return {
                count: state.count + 1
            };
        case types.DEC_LOADING_COUNT:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
}