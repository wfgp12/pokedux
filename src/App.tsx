// Actions
import { setPokemons } from './storage/slices/dataSlice';

// Assets
import logo from './assets/images/logo.svg';

// Components
import Searcher from './components/Searcher'
import PokemonList from './components/PokemonList';

// Libraries
import { Col } from 'antd'
import { useEffect } from 'react';

// Models
import { Pokemon } from './models/pokemon.model';

// redux - hooks
import { useAppDispatch, useAppSelector } from './storage/store/hooks';

// Services
import { getPokemonsDetailsServices, getPokemonsServices } from './services/pokemons.services';

// Styles
import './App.css'
import 'antd/dist/reset.css'

const App = () => {
  const pokemons = useAppSelector((state) => state.dataReducer.pokemons)
  const dispatch = useAppDispatch()

  useEffect(() => {
    getPokemonsServices()
      .then(async (resp) => {
        const pokemonsDetails = await Promise.all(
          resp.map((pokemon) => getPokemonsDetailsServices(pokemon))
        )
        dispatch(setPokemons(pokemonsDetails as Pokemon[]))
      })
      .catch((error) => console.log(error));
  }, [dispatch])

  return (
    <div className='container'>
      <Col span={5} offset={10}> <img src={logo} alt='Pokedux' /></Col>
      <Col span={8} offset={8}><Searcher /></Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App 
