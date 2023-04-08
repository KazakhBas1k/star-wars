import React, { useContext, useEffect, useState } from "react";
import { SliderContext } from "../App";
import CardInfo from "./CardInfo";

function Cards({ item }) {
  const { title, position } = useContext(SliderContext);
  const imgSrc = `./img/${title.toLowerCase()}/${item.name}.jpg`;
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(false);
  }, [title]);

  return (
    <div className="cards" style={{transform: `translateX(-${position}px)`}}>
      <div className="card__item" onClick={() => setActive(true)}>
        <img src={imgSrc} alt={title} />
        <p>{item.name}</p>
      </div>
      <CardInfo info={item} active={active} setActive={setActive} />
    </div>
  );
}

export default Cards;
