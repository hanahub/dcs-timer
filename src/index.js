import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import App from './App';
import './styles/theme.scss';

const store = configureStore();

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
