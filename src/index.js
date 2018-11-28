import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
