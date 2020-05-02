import React from 'react';

import {RubleContainer} from './Menu/Ruble';
import {ContactsContainer} from './Menu/Contacts';
import {InfoContainer} from './Menu/Info';

import books from './Icon/books.png';
import list from './Icon/list.png';
import crown from './Icon/crown.png';
import jurnel from './Icon/jurnel.png';

const rublesData = [
  {
    text: 'сборники',
    url: '#сборники',
    img: books,
  },
  {
    text: 'статьи',
    url: '#статьи',
    img: list,
  },
  {
    text: 'тесты',
    url: '#тесты',
    img: crown,
  },
  {
    text: 'журнал',
    url: '#журнал',
    img: jurnel,
  },
];

const contactData = [
  {
    text: 'по вопросам подписки',
    mail: 'podpiska@diletant.media',
  },
  {
    text: 'по общим вопросам',
    mail: 'info@diletnant.media',
  },
];


const infoData = [
  {
    text: 'правила комментирования',
    url: 'правила комментирования',
  },
  {
    text: 'cookie policy / GDPR',
    url: 'cookie policy / GDPR',
  },
  {
    text: 'реклама на сайте',
    url: 'реклама на сайте',
  },
];


export const MenuContainer = () =>{
  return (
    <div className='footer__menu menu'>
      <div className='menu__container'>
        <RubleContainer data={rublesData}/>
        <InfoContainer data={infoData}/>
        <ContactsContainer data={contactData}/>
      </div>

    </div>
  );
};
