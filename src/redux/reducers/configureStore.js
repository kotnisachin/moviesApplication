import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
    const componseEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support to redux dev tools

    return createStore(
        rootReducer,
        initialState,
        componseEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant())) // this will warn us if you accidentally mutate state
    );
}
