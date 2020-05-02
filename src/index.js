import React from 'react';
import ReactDOM from 'react-dom';

import {Search} from './components/Header';
import {Filter} from './components/Filter';
import {PosterContainer, PosterCarusel} from './components/Poster';
import {Publicity} from './components/Publicity';
import {
  FooterLegalContainer,
  FooterLinksContainer,
  FooterCallbackContainer,
} from './components/Footer';


import './SuperFormReset.css';
import 'normalize.css';
// import './App.css';
import './App.sass';

const Footer = {
  legalText: 'Свидетельство о регистрации СМИ Эл №ФС77-62623 выдано федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор) 31.07.2015 При полном или частичном использовании материалов ссылка на «Дилетант» обязательна. Для сетевых изданий обязательна гиперссылка на сайт «Дилетант» — diletant.media.',
  director: 'Алексей Соломин',
};


const App = () =>{
  return (
    <div className='app'>
      <header>
        <Search/>
      </header>
      <Filter/>
      <div className='app__container'>
        <PosterContainer/>
      </div>
      <Publicity/>
      <div className='app__container'>
        <PosterCarusel/>
      </div>

      <footer>
        <FooterLinksContainer/>
        <FooterCallbackContainer/>
        <FooterLegalContainer
          legalText={Footer.legalText} director={Footer.director} />
      </footer>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('react-container'));
