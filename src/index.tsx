/* eslint-disable @typescript-eslint/ban-ts-comment */
import { render } from 'react-dom';

import App from './app';


render(
  <App />,
  document.getElementById('root'),
);

// @ts-ignore
if (module.hot && process.env.NODE_ENV === 'development') {  
  // @ts-ignore
  module.hot.accept();
}




