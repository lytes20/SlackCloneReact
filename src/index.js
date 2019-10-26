import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import dotenv from 'dotenv'

import getStore from './configure/configureStore'
import './index.css';
import Routes from './routes';

dotenv.config()

const store = getStore()

ReactDOM.render(<Provider store={store} ><Routes /></Provider>, document.getElementById('root'));

