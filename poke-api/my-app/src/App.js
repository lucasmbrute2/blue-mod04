import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import PokemonView from './Pages/Home/PokemonView/PokemonView';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path="/view/:id" component= {PokemonView}/>
      </Switch>
    </div>
  );
}

export default App;
