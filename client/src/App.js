import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, Router} from "@reach/router"
import List from './Components/List';
import Game1 from './Components/Game1';
import NewPlayer from './Components/NewPlayer'
import Game2 from './Components/Game2';
import Game3 from './Components/Game3';
function App() {
  return (
    <div className="App">
      <div className="Card bg-white " style={{"maxWidth":"600px"}}>
        <div className="card-header justify-content-between">
        <Link to="/player/list" className="card-link"  >Manage Player</Link>
        <Link to="/game/1" className="card-link" style={{"float":"right"}}>Manage Player status</Link>
        <Router>
          <Game1 path="/game/1"/>
          <Game2 path="/game/2"/>
          <Game3 path="/game/3"/>
          <List path="/player/list"/>
          <NewPlayer path="/player/new"/>
        </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
