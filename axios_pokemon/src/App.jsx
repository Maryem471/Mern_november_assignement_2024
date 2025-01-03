import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
 
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
   
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Erreur lors de la récupération des Pokémon:', error);
      }
    };

    fetchPokemon();
  }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Pokémon API</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {pokemonList.map((pokemon, index) => (
          <li key={index} style={{ margin: '5px 0' }}>
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
