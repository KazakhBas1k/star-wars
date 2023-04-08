function CardInfo({
  info,
  active,
  setActive,
}) {
  return (
    <>
      {info.url.includes("people") ? (
        <div
          className={active ? "CardInfo active" : "CardInfo"}
          onClick={() => setActive(false)}
        >
          <p>Name: {info.name}</p>
          <p>Heigth: {info.height}</p>
          <p>Mass: {info.mass}</p>
          <p>Hair color: {info.hair_color}</p>
          <p>Skin Color: {info.skin_color}</p>
          <p>Birth year: {info.birth_year}</p>
          <p>Gender: {info.gender}</p>
        </div>
      ) : info.url.includes("planets") ? (
        <div
          className={active ? "CardInfo active" : "CardInfo"}
          onClick={() => setActive(false)}
        >
          <p>Name: {info.name}</p>
          <p>Rotation Period: {info.rotation_period}</p>
          <p>Orbital Period: {info.orbital_period}</p>
          <p>Diameter: {info.diameter}</p>
          <p>Climate: {info.climate}</p>
          <p>Gravity: {info.gravity}</p>
          <p>Terrain: {info.terrain}</p>
        </div>
      ) : info.url.includes("starships") ? (
        <div
          className={active ? "CardInfo active" : "CardInfo"}
          onClick={() => setActive(false)}
        >
          <p>Name: {info.name}</p>
          <p>Model: {info.model}</p>
          <p>Cost in credits: {info.cost_in_credits}</p>
          <p>Length: {info.length}</p>
          <p>Max atmosphering speed: {info.max_atmosphering_speed}</p>
          <p>Crew: {info.crew}</p>
          <p>Passengers: {info.passengers}</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default CardInfo;
