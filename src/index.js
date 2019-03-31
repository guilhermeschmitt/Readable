import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import 'antd/dist/antd.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middlware from './middleware'

const store = createStore(reducer, middlware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));