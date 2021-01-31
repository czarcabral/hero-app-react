import './App.css';
import Dashboard from './dashboard/dashboard'
import Heroes from './heroes/heroes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <h1 style={{"text-align": "center"}}>Tour of Heroes</h1>
          <nav style={{"text-align": "center"}}>
            <Link to="/dashboard">Dashboard</Link>&nbsp;
            <Link to="/heroes">Heroes</Link>
          </nav>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/heroes">
              <Heroes />
            </Route>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
          </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
