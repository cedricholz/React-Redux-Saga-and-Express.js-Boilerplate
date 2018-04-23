import './App.css';

import React from "react";
import {Provider} from "react-redux";

import logo from './logo.svg'

import store from "./store";

import Home from "./Home";


export default class HomePage extends React.Component {


    render() {
        return (
            <Provider store={store}>
                <div className="App">

                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">React Redux-Saga</h1>
                    </header>

                    <Home/>

                </div>

            </Provider>

        );
    }
}











