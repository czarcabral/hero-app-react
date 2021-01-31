import React, { Component } from 'react';
import {
  Link,
} from "react-router-dom";
import './heroes.css'

class Heroes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [
        {id: 1, name: "Gab"},
        {id: 2, name: "Andre"},
        {id: 3, name: "Kev"},
      ]
    }
  }
  render() {
    const heroes = this.state.heroes.map(hero => {
      return (
        <li>
          <Link>
            <span className="badge">{hero.id}</span> {hero.name}
          </Link>
          <button className="delete">X</button>
        </li>
      )
    })
    return (
      <div>
        <h2>My Heroes</h2>
        <ul className="heroes">
        </ul>
        {heroes}
      </div>
    );
  }
}

export default Heroes;
