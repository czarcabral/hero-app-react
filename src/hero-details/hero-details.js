import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './hero-details.css'

const HeroDetails = (props) => {
  let { id } = useParams();
  const [hero, setHero] = useState({ id: 0, name: "Default" });
  const [isEditing, setIsEditing] = useState(false);

  const heroNameRef = React.createRef();

  useEffect(() => {
    const getHero = () => {
      fetch("https://hero-server-andre.herokuapp.com/api/heroes/" + id, {
        "method": "GET",
      })
      .then(response => response.json())
      .then(response => {
        setHero(response)
      })
      .catch(err => {
        console.log(err);
      });
    }

    getHero();
  }, [id]);

  useEffect(() => {
    if (isEditing) {
      heroNameRef.current.focus();
    }
  }, [isEditing, heroNameRef]);

  const edit = () => {
    setIsEditing(true);
  }

  const cancelEdit = () => {
    setIsEditing(false);
  }

  const onChangeHeroName = (value) => {
    setHero(prevHero => { return {id: prevHero.id, name: value} });
  }

  return (
    <React.Fragment>
      <h3 className="badge">{hero.name} Details</h3>
      <p>heroId = {hero.id}</p>
      { isEditing
        ? <input ref={heroNameRef} type="text" id={"heroName"} value={hero.name} onChange={e => onChangeHeroName(e.target.value)} onBlur={cancelEdit} />
        : <p onClick={edit}>heroName = {hero.name}</p>
      }
      <br></br>
      <button>delete hero</button>
    </React.Fragment>
  );
}

export default HeroDetails;
