import 'antd/dist/reset.css'
import './App.css'
import Searcher from './components/Searcher'
import { Col } from 'antd'
import PokemonList from './components/PokemonList'
import logo from './assets/images/logo.svg'
import { useEffect, useState } from 'react'
import { getPokemonsServices } from './services/pokemons.services'
import { Pokemon } from './models/pokemon.model'

function App() {
  useEffect(() => {
    getPokemonsServices()
      .then((resp) => setPokemons(resp))
      .catch((error) => console.log(error));
  }, [])
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  return (
    <div className='container'>
      <Col span={5} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default App
