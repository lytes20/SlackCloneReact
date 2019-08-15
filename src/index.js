import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import dotenv from 'dotenv'

import getStore from './configure/configureStore'
import './index.css';
import App from './App';

dotenv.config()

const store = getStore()

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

