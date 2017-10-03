import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './store'

const StoreInstance = Store()

ReactDOM.render(<BrowserRouter><Provider store={StoreInstance}><App/></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
