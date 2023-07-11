import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../../models/pokemon.model';

interface DataSliceState {
    pokemons: Pokemon[]
}
const INITIAL_STATE: DataSliceState = {
    pokemons: []
}

export const dataSlice = createSlice({
    name : 'data',
    initialState: INITIAL_STATE,
    reducers: {
        setPokemons: (state, action: PayloadAction<Pokemon[]>) => {
            state.pokemons = action.payload
        },
        setFavorite: (state, action: PayloadAction<number>) => {
            const currentPokemonIndex = state.pokemons.findIndex((pokemon) => {
                pokemon.id === action.payload
            })
            if (currentPokemonIndex >= 0) {
                const isFavorite = state.pokemons[currentPokemonIndex].isFavorite
                state.pokemons[currentPokemonIndex].isFavorite = !isFavorite;
            }
        }
    }
})

export const { setFavorite, setPokemons } = dataSlice.actions

export default dataSlice.reducer;