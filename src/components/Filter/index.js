import React from 'react';

import {Sort} from './Sort';
import {Select} from './Select';

// import './Filter.css';
import './Filter.sass';

const dataFilter = {
  sort: ['Новые', 'Старые'],
  filter: {
    what: ['Выставка', 'Ярморка'],
    where: ['Москва', 'Екатеринбург'],
    when: ['17 января', 'Завтра'],
  },
};

export const Filter = ({title, values}) =>{
  return (
    <div className='filter'>
      <Sort values={dataFilter.sort}/>
      <div className='filter__group'>
        <Select options={dataFilter.filter.what}/>
        <Select options={dataFilter.filter.when}/>
        <Select options={dataFilter.filter.where}/>
      </div>
      <div className='filter__icon'>
        <FilterIcon/>
      </div>
    </div>

  );
};

const FilterIcon = () =>
  <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="3" x2="24" y2="3" stroke="#556274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="1" y1="10" x2="24" y2="10" stroke="#556274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="1" y1="17" x2="24" y2="17" stroke="#556274" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="17" cy="17" r="2" fill="white" stroke="#556274" strokeWidth="2"/>
    <circle cx="7" cy="10" r="2" fill="white" stroke="#556274" strokeWidth="2"/>
    <circle cx="17" cy="3" r="2" fill="white" stroke="#556274" strokeWidth="2"/>
  </svg>;
