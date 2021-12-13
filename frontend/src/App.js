import "./App.css";
import pokedexlogo from "./Pokedex.png";
import Search from "./components/Search";
import Results from "./components/Results";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const App = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemon = async () => {
    const searchResults = [];

    try {
      // Search PokeApi for pokemon
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
      await axios.get(url).then((res) => {
        // Save pokemonData
        searchResults.push(res.data);
        setPokemonData(searchResults);
      });

      // Clear error message if any
      setErrorMessage("");
    } catch (err) {
      console.log(err);
      setErrorMessage(pokemon);
    }

    /**
     * Finds and sets the content of a div for error messages
     * @param {String} input
     */
    function setErrorMessage(input) {
      let errorDiv = document.getElementById("error-message");
      errorDiv.innerHTML =
        input.trim() === ""
          ? ""
          : `We couldn't find "${input}", please try again`;
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase().trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPokemonData([]);
    getPokemon();
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <header>
        <img src={pokedexlogo} alt="PokeDex logo"></img>
      </header>
      <main>
        {/* Search Form */}
        <Search
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
        {/* Search Results */}
        <div id="results">
          <p id="error-message"></p>
          {isLoading ? (
            <Spinner animation="border" />
          ) : (
            <Results pokemonData={pokemonData} />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
