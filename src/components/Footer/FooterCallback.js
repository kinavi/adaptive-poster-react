import React from 'react';

import './FooterCallback.sass';

export const FooterCallbackContainer = () =>
  <div className='footer__callback callback'>
    <span className='callback__message'>
      Нашли ошибку или опечатку ?<br/>
      Выделите ее и нажмите Ctrl+Enter
    </span>
  </div>;
