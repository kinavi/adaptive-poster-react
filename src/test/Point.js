import React from 'react';
import {IconContext} from 'react-icons';
import {FaCircle, FaRegCircle} from 'react-icons/fa';


import './Point.css';

export const Point = ({_id, title, link, filled}) =>{
  return (
    <div className='point'>
      {filled?
        <IconContext.Provider value={{className: 'react-icons'}}>
          <FaRegCircle/>
        </IconContext.Provider>:
        <IconContext.Provider value={{className: 'react-icons'}}>
          <FaCircle/>
        </IconContext.Provider>
      }
    </div>
  );
};
