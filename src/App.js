import './App.css';
import Dashboard from './dashboard/dashboard'
import Heroes from './heroes/heroes'
import HeroDetails from './hero-details/hero-details'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ textAlign: "center" }}>Tour of Heroes</h1>
          <nav style={{ textAlign: "center" }}>
            <Link to="/dashboard">Dashboard</Link>&nbsp;
            <Link to="/heroes">Heroes</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/heroes">
            <Heroes />
          </Route>
          <Route path="/detail/:id" component={HeroDetails} />
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
