import "./Results.css";

const Results = ({ pokemonData }) => {
  let sortedAbilities = [];
  let sortedMoves = [];

  // Alphabetically sort all abilities and moves
  if (pokemonData != null) {
    pokemonData.map((data) => {
      data.abilities.map((ability) => {
        sortedAbilities.push(ability.ability.name);
      });

      data.moves.map((move) => {
        sortedMoves.push(move.move.name);
      });
    });

    sortedAbilities.sort();
    sortedMoves.sort();
  }

  return pokemonData.map((data, index) => {
    return (
      <span key={index}>
        <div id="pokemon-profile">
          <h3>{data.name[0].toUpperCase() + data.name.substring(1)}</h3>
          <div id="pokemon-image">
            <img src={data.sprites["front_default"]} />
          </div>
        </div>
        <h4>Abilities</h4>
        <div id="pokemon-abilities">
          {/* Dynamically display pokemon abilities */}
          {sortedAbilities.map((ability, index) => {
            return (
              <div className="PokemonAbility" key={index}>
                {ability[0].toUpperCase() +
                  ability.substring(1).replace("-", " ")}
              </div>
            );
          })}
        </div>
        <br />
        <h4>All known Moves</h4>
        <div id="pokemon-movesets">
          {/* Dynamically display vaild pokemon moves */}
          {sortedMoves.map((move, index) => {
            return (
              <div className="PokemonMove" key={index}>
                {move[0].toUpperCase() + move.substring(1).replace("-", " ")}
              </div>
            );
          })}
        </div>
      </span>
    );
  });
};

export default Results;
