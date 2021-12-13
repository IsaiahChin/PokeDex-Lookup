import "./App.css";
import pokedexlogo from "./Pokedex.png";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={pokedexlogo} alt="PokeDex logo"></img>
      </header>
      <main>
        <Search />
      </main>
    </div>
  );
};

export default App;
