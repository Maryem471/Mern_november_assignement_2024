import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Planet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        setError(false);
        const response = await axios.get(`https://swapi.dev/api/planets/${id}/`);
        setPlanet(response.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchPlanet();
  }, [id]);

  if (error) {
    return (
      <div>
        <h2>These aren't the droids you're looking for.</h2>
        <img
          src="https://starwarsblog.starwars.com/wp-content/uploads/2015/01/obi-wan-kenobi.jpg"
          alt="Obi-Wan Kenobi"
          style={{ width: "300px" }}
        />
      </div>
    );
  }

  if (!planet) return <div>Loading...</div>;

  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Diameter: {planet.diameter} km</p>
    </div>
  );
}

export default Planet;
