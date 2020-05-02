import React, {useState, useEffect} from 'react';

import {useWindowSize} from '../../hooks/useWindowSize';

import {Poster} from '.';

import {posters} from '../../data/posters';

// import './Poster.css';

const CaruselCounter = ({count, length}) =>
  <span className='carusel__counter'>показано {count} из {length} карточек </span>;


export const PosterCarusel = () =>{
  const [size, setSize] = useState(4);
  const windowSize = useWindowSize();

  useEffect(()=>{
    if (windowSize.width<720) {
      setSize(3);
    } else if (windowSize.width>=720&&windowSize.width<900) {
      setSize(4);
    } else if (windowSize.width>=900&&windowSize.width<1190) {
      setSize(3);
    } else {
      setSize(4);
    }
  }, [windowSize.width]);

  return (
    <>
      <div className='poster__carusel carusel' >
        {posters.map((item, i)=>i<=size&&!item.isBig?<Poster key={i} {...item} />:null)}
      </div>
      <div className='carusel__show-group' >
        <CaruselCounter count={size} length={posters.length}/>
        <button className='carusel__btn'>
          БОльше материалов
        </button>
      </div>
    </>
  );
};
