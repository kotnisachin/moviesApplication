import { combineReducers } from "redux";
import options from "./options";
import loading from "./loading";
import information from "./information";

const rootReducer = combineReducers({
    options,
    loading,
    information
});

export default rootReducer;