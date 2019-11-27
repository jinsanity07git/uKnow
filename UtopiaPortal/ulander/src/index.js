import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { FormattedMessage,IntlProvider } from 'react-intl';
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import intl from 'intl';

// addLocaleDate([...en,...zh]);

ReactDOM.render(  <IntlProvider 
                    locale={'zh'} 
                    messages={zh_CN}> 
                        <App /> 
                  </IntlProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
