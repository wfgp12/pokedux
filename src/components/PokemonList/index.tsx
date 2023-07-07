import { Pokemon } from "../../models/pokemon.model";
import PokemonCard from "../PokemonCard";
import './pokemonList.css'

type Props = {
    pokemons?: Pokemon[]
}
const PokemonList = ({ pokemons = [] }: Props) => {
    return (
        <div className="PokemonList">
            {pokemons?.map((pokemon, index) => <PokemonCard key={index} pokemon={pokemon} />)}
        </div>
    )
}

export default PokemonList;