import PokemonCard from "../PokemonCard/PokemonCard";
import React, { useState, useEffect } from "react";
import { Api } from "../../../Api/Api";

const PokemonList = ()=>{
    const [pokemon,setPokemon]= useState([])
    useEffect(()=>{
        getApi()
    },[])
    
    const getApi = async ()=>{
        const response = await Api.readAllUrl();
        const data = await response.json()
        const res = data.results;
        setPokemon(res)
    }
    return(
        <div>
            {pokemon.map((eachPokemon,index)=>(
                <PokemonCard pokemon={eachPokemon} key={eachPokemon._id}/>
            ))}
        </div>
    )
}
export default PokemonList;