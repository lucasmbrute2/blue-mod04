import PokemonCard from "../PokemonCard/PokemonCard";
import React, { useState, useEffect } from "react";
import { Api } from "../../../Api/Api";

function PokemonList() {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        getApi();
    }, []);

    const getApi = async () => {
        const response = await Api.readAllUrl();
        const results = await response.json();

        setPokemon(results);

    };
    return (
        <div>
            {pokemon.map((eachPokemon, index) => (
                <PokemonCard pokemon={eachPokemon} key={eachPokemon.id} />
            ))}
        </div>
    );
}
export default PokemonList;