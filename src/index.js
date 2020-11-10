import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Signup from './components/Signup'

ReactDOM.render( <
    React.StrictMode >

    <
    Router >
    <
    Switch >
    <
    Route path = '/reactgymapp/Signup'
    component = { Signup }
    /> <
    Route path = '/reactgymapp'
    exact component = { App }
    />


    <
    /Switch> < /
    Router >

    <
    /React.StrictMode>,
    document.getElementById('root')
);