import { combineReducers } from "redux";
import options from "./options";
import loading from "./loading";

const rootReducer = combineReducers({
    options,
    loading
});

export default rootReducer;