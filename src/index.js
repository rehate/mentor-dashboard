import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/app';

/* fetch('http://127.0.0.1:3000/')
  .then((data)=> data.json())
  .then((dataBase)=> {render(<App dataBase={dataBase}/>, document.getElementById('root'));})
 */
const dataBase = require('./assets/database.json');
render(<App dataBase={dataBase}/>, document.getElementById('root'));