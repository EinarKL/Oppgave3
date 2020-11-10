import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Body from './components/body';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Body />, document.getElementById('root'));