import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import PokemonView from './Pages/Home/PokemonView/PokemonView';
import { Link } from  "react-router-dom"
function App() {
  return (
    <div className="App">
        <header>Product App
          <Link to='/user'>Home</Link>
          <Link to='/user/add'>Create</Link>
          
        </header>
      <Switch>
        <Route path='/user' exact={true} component={Home} />
        <Route path='/user/add' exact={true} component={Create} />
        <Route path="/user/view/:id" component= {PokemonView}/>
      </Switch>
    </div>
  );
}

export default App;
