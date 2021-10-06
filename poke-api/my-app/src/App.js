import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
// import PokemonView from './Pages/Home/PokemonView/PokemonView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/user' exact={true} component={Home} />
        <Route path='/user/add' exact={true} component={Create} />
        {/* <Route path="/view/:id" component= {PokemonView}/> */}
      </Switch>
    </div>
  );
}

export default App;
