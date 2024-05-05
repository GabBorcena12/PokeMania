import React, { useState, useEffect} from 'react';
import { getPokemon, getAllPokemon }  from '../services/PokemonService';
import PokemonList from './PokemonList';
import LoadingScreen from './LoadingScreen';

const PokeCards = () => {
const [pokemonData, setPokemonData] = useState([])
const [isLoading, setIsLoading] = useState(true)
const apiURL = 'https://pokeapi.co/api/v2/pokemon'

useEffect(() => {
  async function fetchData() {
    let response = await getAllPokemon(apiURL)
    await loadPokemon(response.results)
    setIsLoading(false)
  } 
  fetchData();
},[])

const loadPokemon = async (data) => {
  let loadPokemonData = await Promise.all(data.map(async pokemon => {
    let pokemonGet = await getPokemon(pokemon)
    return pokemonGet;
  }))
  setPokemonData(loadPokemonData)
}

return (
  <>
    {<div className="gridContainer">
        {isLoading ? (
            <LoadingScreen />
        ) : (
        <>
            <PokemonList pokemon={pokemonData} />       
        </>
        )}
    </div>}
  </>
);
}

export default PokeCards;
