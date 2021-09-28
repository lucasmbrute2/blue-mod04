const PokemonCard = ({ pokemon })=>{
    return(
        <div>
            {pokemon.name}
            <div>
            <img src={pokemon.url} alt={pokemon.name}></img>
            </div>
        </div>
    )
}
export default PokemonCard;