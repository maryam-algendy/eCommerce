import React from 'react';
import ReactDOM from 'react-dom';
import Portal from "./Portal";
import * as serviceWorker from './serviceWorker';
import {createStore ,applyMiddleware,compose} from "redux";
import {Provider} from "react-redux";
import reduxThunk from "redux-thunk";
import reducer from './redux/reducers';

// global style
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Layout/components/style/Main.scss';


const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__|| compose;
const store= createStore(
  reducer, composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(<Provider store={store}><Portal /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
