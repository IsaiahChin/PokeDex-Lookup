import "./Results.css";

const Results = ({ pokemonData }) => {
  return pokemonData.map((data, index) => {
    return (
      <span key={index}>
        <div id="pokemon-profile">
          <h2>{data.name[0].toUpperCase() + data.name.substring(1)}</h2>
          <div id="pokemon-image">
            <img src={data.sprites["front_default"]} />
          </div>
        </div>
        <h3>Abilities</h3>
        <div id="pokemon-abilities">
          {/* Dynamically display pokemon abilities */}
          {data.abilities.map((ability) => {
            let abilityName = ability.ability.name;
            return (
              <div className="PokemonAbility" key={abilityName}>
                {abilityName[0].toUpperCase() +
                  abilityName.substring(1).replace("-", " ")}
              </div>
            );
          })}
        </div>
        <h3>All known Moves</h3>
        <div id="pokemon-movesets">
          {/* Dynamically display vaild pokemon moves */}
          {data.moves.map((move) => {
            let moveName = move.move.name;
            return (
              <div className="PokemonMove" key={moveName}>
                {moveName[0].toUpperCase() +
                  moveName.substring(1).replace("-", " ")}
              </div>
            );
          })}
        </div>
      </span>
    );
  });
};

export default Results;
