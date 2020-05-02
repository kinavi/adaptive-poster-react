import React from 'react';
import './Search.sass';

const CloseBtn = () =>{
  return (
    <>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="24" fill="#EDEDED"/>
      </svg>
      <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute'}}>
        <rect x="29.7021" y="10.1875" width="3" height="29" rx="1.5" transform="rotate(45 29.7021 10.1875)" fill="#556274"/>
        <rect x="9.19629" y="12.3086" width="3" height="29" rx="1.5" transform="rotate(-45 9.19629 12.3086)" fill="#556274"/>
      </svg>
    </>
  );
};


export const Search = () =>{
  // Суда обработчики
  return (
    <div className='search'>
      <input className='search__input'/>
      <div className='search__btn btn' >
        <CloseBtn />
      </div>
    </div>
  );
};
