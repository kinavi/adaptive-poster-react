import React from 'react';

import {RankIcon} from './Icon/RankIcon';

import './FooterLegal.sass';

export const FooterLegalContainer = ({legalText, director}) =>
  <div className='footer__legal-container'>
    <div className='footer__information' >
      <span>
        {legalText}
      </span>
      <div className='footer__rank-container'>
        <span>
        Главный редактор: {director}
        </span>
        <RankIcon/>
      </div>

    </div>
  </div>;
