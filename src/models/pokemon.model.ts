
export interface Pokemon {
    id?: number
    name: string
    url?: string
    order?: number
    sprites?: {
        other: Other
    },
    types?: Type[],
    isFavorite?: boolean
}

export interface PokemonReducerState {
    pokemons?: Pokemon[] | []
}
export interface Other {
    "dream_world": DreamWorld,
    "official-artwork": OfficialArtwork
}

export interface DreamWorld {
    front_default: string
}

export interface OfficialArtwork {
    front_default: string
    front_shiny: string
}

export interface Type {
    slot: number
    type: {
        name: string
        url: string
    }
}