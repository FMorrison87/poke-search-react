import { useState, useEffect } from "react";
import Pokelist from "../components/Pokelist";

function Pokedex() {
  const [data, setData] = useState(null);
  const [pokemon, setPokemon] = useState("pikachu");
  const input = document.querySelector("input");
  let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  const fetchData = async () => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const search = () => {
    console.log(pokemon);
    let value = input.value.toLowerCase();
    setPokemon(value);
    console.log(value);
    url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetchData();
  };

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      search();
    }
  };

  const handleShowStats = () => {
    const additionalStats = document.querySelector(".pokemon-card_stats-more");
    const button = document.querySelector(".pokemon-card_show-button");
    additionalStats.classList.toggle("hidden");
    additionalStats.classList.contains("hidden")
      ? (button.innerText = "SHOW STATS")
      : (button.innerText = "HIDE STATS");
  };

  return (
    <div className="pokemon-wrapper">
      <div className="pokedex-container">
        {data && console.log(data)}
        <h1>Pokedex</h1>
        <div className="pokemon-card">
          {!data && <p>loading...</p>}
          {data && (
            <div className="pokemon-card_data">
              <div className="pokemon-card_stats">
                <h2>{data.name}</h2>
                <div>
                  <span>
                    <strong>id: </strong>
                    {data.id}
                  </span>
                </div>
                <div>
                  <span>
                    <strong>type: </strong>
                    {data.types[0].type.name}
                  </span>
                </div>
                <img src={data.sprites.front_default} alt="default image" />
                <button
                  className="pokemon-card_show-button secondary"
                  onClick={handleShowStats}
                >
                  SHOW STATS
                </button>
              </div>
              <div className="pokemon-card_stats-more hidden">
                <div>
                  <h3>abilities: </h3>
                  {data.abilities.map((item, index) => {
                    return <div key={index}>{item.ability.name}</div>;
                  })}
                </div>
                <br></br>
                <div>
                  <h3>stats: </h3>
                  {data.stats.map((item, index) => {
                    return (
                      <div key={index}>
                        {item.stat.name}: {item.base_stat}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <input onKeyPress={handleKeyPress} placeholder="search for pokemon" />
        <button onClick={search} className="pokemon-search_button">
          SEARCH
        </button>
      </div>
      <Pokelist />
    </div>
  );
}

export default Pokedex;
