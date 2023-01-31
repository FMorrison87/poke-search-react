import { useState, useEffect } from "react";

function PokeList() {
  const [data, setData] = useState(null);
  // I want to use this for typeId, but it is always 1 behind.
  //const [typeId, setTypeId] = useState(1);
  let typeId = 1;
  let url = `https://pokeapi.co/api/v2/type/${typeId}/`;
  //const url = `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
  const fetchData = async url => {
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleSelect = event => {
    const buttons = document.querySelectorAll(".pokemon-type_buttons button");

    //Remove selected from current button and add to target
    buttons.forEach(button => {
      button.classList.contains("selected") &&
        button.classList.remove("selected");
    });
    event.target.classList.add("selected");

    //Set typeId
    //setTypeId(typeId);
    typeId = event.target.getAttribute("data-id");
    url = `https://pokeapi.co/api/v2/type/${typeId}/`;
    fetchData(url);
  };

  const handleNameClick = event => {
    const name = event.target.innerText;
    const input = document.querySelector("input");
    const searchButton = document.querySelector(".pokemon-search_button");

    input.value = name;
    searchButton.click();
  };

  //   return (
  //     <div>
  //       <h1>PokeList</h1>
  //       <p>A comprehensive list of all Pokemon for reference.</p>
  //       {data && (
  //         <div className="pokemon-list">
  //           <ul>
  //             {data.results.map((item, index) => {
  //               return <li key={index}>{item.name}</li>;
  //             })}
  //           </ul>
  //         </div>
  //       )}
  //     </div>
  //   );

  return (
    <div className="pokemon-type_container">
      <h1>Pokemon Types</h1>
      <div className="pokemon-type_buttons">
        <button
          onClick={handleSelect}
          style={{ background: "brown" }}
          data-id="1"
          className="selected"
        >
          Normal
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#ba6c6c" }}
          data-id="2"
        >
          Fighting
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#ac9165" }}
          data-id="3"
        >
          Flying
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#504198" }}
          data-id="4"
        >
          Poison
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#623b04" }}
          data-id="5"
        >
          Ground
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#585858" }}
          data-id="6"
        >
          Rock
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#768512" }}
          data-id="7"
        >
          Bug
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#5e5092" }}
          data-id="8"
        >
          Ghost
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#7b7b7b" }}
          data-id="9"
        >
          Steel
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#d95200" }}
          data-id="10"
        >
          Fire
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#035cb8" }}
          data-id="11"
        >
          Water
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#669b30" }}
          data-id="12"
        >
          Grass
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#b9a616" }}
          data-id="13"
        >
          Electric
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#292069" }}
          data-id="14"
        >
          Psychic
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#3e7ea7" }}
          data-id="15"
        >
          Ice
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#b77800" }}
          data-id="16"
        >
          Dragon
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#262626" }}
          data-id="17"
        >
          Dark
        </button>
        <button
          onClick={handleSelect}
          style={{ background: "#ad6fc4" }}
          data-id="18"
        >
          Fairy
        </button>
      </div>
      {data && (
        <div className="pokemon-list">
          <ul>
            {data.pokemon.map((item, index) => {
              return (
                <li key={index} onClick={handleNameClick}>
                  {item.pokemon.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default PokeList;
