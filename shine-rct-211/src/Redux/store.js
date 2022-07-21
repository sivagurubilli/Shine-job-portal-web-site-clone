import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { jobDetailsReducer } from "../Redux/SinglePage/reducer";

const rootReducer = combineReducers({
    jobReducer:jobDetailsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState(),"initial store state")
