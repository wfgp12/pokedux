import { Pokemon, PokemonReducerState } from "../../../models/pokemon.model";
import { PokemonTypes } from './pokemons.types';

const INITIAL_STATE: PokemonReducerState = {
    pokemons: []
}
type ActionType = {
    type: PokemonTypes,
    payload?: unknown
}

export const PokemonReducer = (state = INITIAL_STATE, action: ActionType): PokemonReducerState  => {
    switch (action.type) {
        case PokemonTypes.SET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload as Pokemon[]
            }    

        default:
            return state;
    }
};