function PokemonCard({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
            {pokemon.name}
            <div>
                {/* <img src={pokemon.url} /> */}
            </div>
        </div>
    );
}
export default PokemonCard;