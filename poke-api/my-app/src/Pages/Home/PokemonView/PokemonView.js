import { Api } from "../../../Api/Api";

const PokemonView =()=>{
    
    const handleDelete = async()=>{
        const response = await Api.
    }
    return(
        <button onClick={handleDelete}>Excluir</button>
    )
}
export default PokemonView;