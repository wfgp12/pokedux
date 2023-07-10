
export interface Pokemon {
    name: string
    url: string
}

export interface PokemonReducerState {
    pokemons?: Pokemon[] | []
}
