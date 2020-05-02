import React from 'react';

import './Ruble.sass';

const Ruble = ({text, url, img}) =>{
  return (
    <div className='menu__link link'>
      <img className='link__img' src={img}></img>
      <a href={url} className='menu__text'>{text}</a>
    </div>
  );
};


const RubleContainer = ({data}) =>{
  return (
    <div className='menu__links menu__colum'>
      <span className='menu__title'>РУбрикатор</span>
      {data.map((item, i)=>
        <Ruble key={i} {...item} />,
      )}
    </div>
  );
};


export {RubleContainer};
