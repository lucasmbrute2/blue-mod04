const PokemonView =(props)=>{
    const id = props.match.params.id
    return(
        <div>
            View Product {id}
        </div>
    )
}
export default PokemonView;