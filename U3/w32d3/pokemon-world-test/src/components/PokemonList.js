
import {connect} from 'react-redux'

const PokemonList = props => {

    return (
        <div className="App">
            <h1>{props.title}</h1>
        </div>
    );
}
const mapStateToProps = state =>{
    console.log("currentState", state)
    return {
      title: state.title
    }
}
// export default PokemonList;
export default connect(
    mapStateToProps, 
    {})(PokemonList);