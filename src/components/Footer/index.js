import React from 'react';

import {MenuContainer} from './FooterMenu';
import {FooterLegalContainer} from './FooterLegalContainer';
import {FooterLinksContainer} from './FooterLinksContainer';
import {FooterCallbackContainer} from './FooterCallback';
import {FacebookIcon, LogoIcon, OdnIcon, TwitterIcon, VkIcon} from './Icon';
// import './Footer.css';
import './Footer.sass';

const SocialContainer = () =>{
  return (
    <div className='footer__social social'>
      <LogoIcon/>
      <span className='social__caption'>Мы в соцсетях:</span>
      <div className='social__links social'>
        <TwitterIcon className='social__link'/>
        <VkIcon className='social__link'/>
        <FacebookIcon className='social__link'/>
        <OdnIcon className='social__link'/>
      </div>
    </div>
  );
};

export {
  SocialContainer,
  MenuContainer,
  FooterLegalContainer,
  FooterLinksContainer,
  FooterCallbackContainer,
};


