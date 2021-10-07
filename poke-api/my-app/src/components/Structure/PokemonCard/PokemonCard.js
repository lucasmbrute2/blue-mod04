function PokemonCard({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
            {pokemon.name}
            <div>
            {pokemon.lastName} 
            </div>
        </div>
    );
}
export default PokemonCard;