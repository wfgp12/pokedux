import { Pokemon } from "../../../models/pokemon.model";
import { PokemonTypes } from "./pokemons.types";

export const setPokemonsReducer = (payload: Pokemon[]) => ({
    type: PokemonTypes.SET_POKEMONS, payload
})