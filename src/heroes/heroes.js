import React, { useEffect, useState } from 'react';
import {
  Link,
} from "react-router-dom";
import './heroes.css'

const Heroes = (props) => {
  const [heroes, setHeroes] = useState([{ id: 1, name: "Gab" }, { id: 2, name: "Andre" }, { id: 3, name: "Kev" },]);

  const getHeroes = () => {
    fetch("https://hero-server-andre.herokuapp.com/api/heroes", { method: "GET" }).then(response => {
      console.log("before converting to json", response);
      return response.json();
    }).then(response => {
      setHeroes(response);
    }).catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getHeroes();
  }, []);

  const heroesElements = heroes.map(hero => {
    return (
      <li key={hero.id}>
        <Link to={"/detail/" + hero.id}>
          <span className="badge">{hero.id}</span> {hero.name}
        </Link>&nbsp;
        <button className="delete">X</button>
      </li>
    );
  });

  return (
    <React.Fragment>
      <h2>My Heroes</h2>
      <ul className="heroes">
        {heroesElements}
      </ul>
    </React.Fragment>
  );
}

export default Heroes;
