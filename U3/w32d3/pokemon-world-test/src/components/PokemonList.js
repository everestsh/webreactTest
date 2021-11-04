
import {connect} from 'react-redux'
import { getPokemon } from '../actions';


const PokemonList = props => {
    
    const fetchPokemon = e => {
        e.preventDefault();
        props.getPokemon();
      };

    return (
        <div className="App">
            <h2>Welcome to Pokémon World!</h2>
            <h1>{props.title}</h1>
            <div>
                {props.pokemon.map(pokemon => (
                <h4 key={pokemon.url}>{pokemon.name}</h4>
                ))}
            </div>
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={fetchPokemon}>Fetch Pokemon!</button>
        </div>
    );
}
// const mapStateToProps = state =>{
//     console.log("currentState", state)
//     return {
//       title: state.title
//     }
// }
const mapStateToProps = state => ({
    pokemon: state.pokemon,
    error: state.error
  });

// export default PokemonList;
export default connect(
    mapStateToProps, 
    {getPokemon})(PokemonList);