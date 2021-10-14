function PokemonCard({ pokemon }) {
    console.log(pokemon)
    return (
        <div>
            {pokemon.name}
            <div>
            {pokemon.lastName} 
            </div>
            {pokemon.profile.map(profile => <p>{profile.title}</p>)}
        </div>
    );
}
export default PokemonCard;