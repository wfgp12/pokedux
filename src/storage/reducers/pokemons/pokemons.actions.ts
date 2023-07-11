import { Dispatch } from "redux";
import { Pokemon } from '../../../models/pokemon.model';
import { PokemonTypes } from "./pokemons.types";
import { getPokemonsDetailsServices } from "../../../services/pokemons.services";

export const setPokemonsReducer = (payload: Pokemon[] = []) => ({
    type: PokemonTypes.SET_POKEMONS, payload
})

export const getPokemonsWithDetailsReducer = (pokemons: Pokemon[] = [] ) => async (dispatch: Dispatch) => {
    const pokemonsDetails = await Promise.all(
        pokemons.map((pokemon) => getPokemonsDetailsServices(pokemon))
    )
    dispatch(setPokemonsReducer(pokemonsDetails as Pokemon[]))
}