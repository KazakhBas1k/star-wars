import React, { useContext, useEffect, useState } from 'react'
import Cards from './Cards';
import { SliderContext } from "../App";

function Slider() {

  const { items, isLoading, slider, position, setPosition, searchValue} = useContext(SliderContext);
  const [visibleItem, setVisibleItem] = useState(4);

  useEffect(() => {
    const maxWidth = window.innerWidth;
    if (maxWidth < 1280 && maxWidth > 990) {
      setVisibleItem(3);
    } else if (maxWidth < 990 && maxWidth > 680) {
      setVisibleItem(2);
    } else if (maxWidth < 680) {
      setVisibleItem(1);
    }
  }, [window.innerWidth]);

  function nextHundler() {
    if (
      position === 0 ||
      position < 310 * (items.results.length - visibleItem)
    ) {
      setPosition(position + 310);
    }
  }

  function prevHundler() {
    if (position > 1) {
      setPosition(position - 310);
    }
  }

  function renderCard() {
    return isLoading
      ? [...Array(10)]
      : items.results
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item, index) => <Cards key={index} item={item}/>);
  }
    
    return (
      <div className="Slider">
        <button className="arrow" onClick={prevHundler}>
          <img src="./img/Arrow.svg" alt="Arrow" />
        </button>
        <button className="arrow" onClick={nextHundler}>
          <img src="./img/Arrow.svg" alt="Arrow" />
        </button>
        <div className="cards__container" ref={slider}>
          {renderCard()}
        </div>
      </div>
    );
}

export default Slider;