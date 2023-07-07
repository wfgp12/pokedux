import axios from "axios";
import { Pokemon } from "../models/pokemon.model";

interface GetPokemonResponse {
    count: number
    next: string
    previous: unknown
    results: Pokemon[]
}
export const getPokemonsServices = async (): Promise<Pokemon[]> => {
    try {
        const response = await axios.get<GetPokemonResponse>(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const { data, status } = response;
        if (status === 200) {
            return data.results;
        }
        throw new Error("Error en la solicitud HTTP");
    } catch (error) {
        console.log(error)
        return [];
    }
};