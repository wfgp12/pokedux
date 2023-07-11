/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { applyMiddleware, compose, legacy_createStore } from "redux";
import { PokemonReducer } from "../reducers/pokemons/pokemons.reducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";


const loggerMiddleware = createLogger();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancer = composeAlt(applyMiddleware(thunk, loggerMiddleware));

export const store = legacy_createStore(PokemonReducer, composeEnhancer);
