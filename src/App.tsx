// Actions
import { setPokemonsReducer } from './storage/reducers/pokemons/pokemons.actions';

// Assets
import logo from './assets/images/logo.svg';

// Components
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';

// Libraries
import { Col } from 'antd'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

// Models

// Services
import { getPokemonsDetailsServices, getPokemonsServices } from './services/pokemons.services';

// Styles
import './App.css'
import 'antd/dist/reset.css'
import { Pokemon, PokemonReducerState } from './models/pokemon.model';

const App = () => {

  const pokemons = useSelector<PokemonReducerState>((state): PokemonReducerState['pokemons'] => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemonsServices()
      .then(async (resp: Pokemon[]) => {
        const pokemonsDetails = await Promise.all(
          resp.map((pokemon) => getPokemonsDetailsServices(pokemon))
        )
        dispatch(setPokemonsReducer(pokemonsDetails as Pokemon[]))
      })
      .catch((error) => console.log(error));
  }, [dispatch])

  return (
    <div className='container'>
      <Col span={5} offset={10}> <img src={logo} alt='Pokedux' /></Col>
      <Col span={8} offset={8}><Searcher /></Col>
      <PokemonList pokemons={pokemons as Pokemon[]} />
    </div>
  )
}

export default App 
