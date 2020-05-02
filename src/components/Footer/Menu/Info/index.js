import React from 'react';

import './Info.sass';

const Info = ({text, url}) =>{
  return (
    <a className='info__link' href={url}>{text}</a>
  );
};

const InfoContainer = ({data}) =>{
  return (
    <div className='menu__info menu__colum'>
      <span className='menu__title'>Инфо</span>
      {
        data.map((item, i)=><Info key={i} {...item}/>)
      }
    </div>
  );
};

export {InfoContainer}