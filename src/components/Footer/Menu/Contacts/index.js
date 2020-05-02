import React from 'react';

import './Contact.sass';

const Contact = ({text, mail}) =>{
  return (
    <div className='contacts'>
      <span className='contacts__caption'>{text}</span><br/>
      <a className='contacts__link'>{mail}</a>
    </div>
  );
};

export const ContactsContainer = ({data}) =>{
  return (
    <div className='menu__contacts menu__colum'>
      <span className='menu__title'>Контакты</span>
      {data.map((item, i)=>
        <Contact key={i} {...item}/>,
      )}
    </div>
  );
};
