import React from 'react';

import {Select} from './Select';

import './Sort.sass';

export const Sort = ({values}) =>{
  return (
    <div className='filter__sort sort'>
      <span className='sort__title'>
        Сортировка:
      </span>
      <Select isSort={true} options={values} />
    </div>
  );
};
