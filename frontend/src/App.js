import "./App.css";
import pokedexlogo from "./Pokedex.png";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={pokedexlogo} alt="PokeDex logo"></img>
      </header>
    </div>
  );
};

export default App;
