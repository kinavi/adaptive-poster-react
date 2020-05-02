import React, {useState, useEffect} from 'react';

import {useWindowSize} from '../../hooks/useWindowSize';

import banerDesktop from '../../media/publicity.png';
import banerMobile from '../../media/Rectangle.png';
// import './Publicity.css';

import './Publicity.sass';

export const Publicity = () =>{
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();

  useEffect(()=>{
    if (windowSize.width<765) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize.width]);
  return (
    <div className='publicity'>
      <div className='publicity__group'>
        <span className='publicity__title'>реклама на diletant.media</span>
        <img className='publicity__banner' src={isMobile?banerMobile:banerDesktop}></img>
      </div>
    </div>
  );
};
