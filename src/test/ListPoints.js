import React from 'react';
import {Point} from './Point';

import data from '../data.json';

export const ListPoints = () =>{
  return (
    <div className='container-points'>
      {data.map((item, i)=> <Point key={i} {...item}/>
      )}

    </div>
  );
};
