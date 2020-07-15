import React from 'react';
import ReactDOM from 'react-dom';
import Portal from "./Portal";
import * as serviceWorker from './serviceWorker';

// global style
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Layout/components/style/Main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Portal />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
