import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setError(false);
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);

        // Fetch homeworld
        const homeworldResponse = await axios.get(response.data.homeworld);
        setHomeworld(homeworldResponse.data);
      } catch (error) {
        setError(true);
      }
    };

    fetchCharacter();
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

  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <h2>{character.name}</h2>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Gender: {character.gender}</p>
      <p>
        Homeworld:{" "}
        {homeworld ? (
          <a href={`/planets/${homeworld.url.split("/")[5]}`}>Homeworld</a>
        ) : (
          "Loading..."
        )}
      </p>
    </div>
  );
}

export default Character;
