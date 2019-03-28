import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import './root.css';
import AppContainer from "./components/AppContainer";

export default class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <AppContainer>
                <Routes />
            </AppContainer>
        </BrowserRouter>
    );
  }
}
