import React, {useState} from 'react';
import {IconContext} from 'react-icons';
import {IoMdArrowDropdown} from 'react-icons/io';

import './Select.sass';

export const Select = ({options, isSort=false}) =>{
  const [isHide, setIsHide] = useState(true);
  const [title, setTitle] = useState(options[0]);

  const handlerClick= () =>{
    setIsHide(!isHide);
  };
  const handlerChange = (e) =>{
    setTitle(e.target.textContent);
  };

  return (
    <div onClick={handlerClick} className='select'>
      <div className='select__container' >
        <span className={`select__title ${isSort&&'sort-title'}`}>{title}</span>
        {/* Надо переделать */}
        <IconContext.Provider
          value={{className: 'select__icon'}}>
          <IoMdArrowDropdown/>
        </IconContext.Provider>
      </div>
      {isHide||
          <div className='select__options'>
            {options.map((item, i)=><span className='select__option' onClick={handlerChange} key={i}>{item}</span>)}
          </div>
      }

    </div>
  );
};
