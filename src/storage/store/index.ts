import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import dataSlice from "../slices/dataSlice";


const loggerMiddleware = createLogger();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = composeAlt(applyMiddleware(thunk, loggerMiddleware));

const rootReducer = combineReducers({
    dataReducer: dataSlice
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const store = legacy_createStore(rootReducer, composeEnhancer);
