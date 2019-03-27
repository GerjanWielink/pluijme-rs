import React, { Component } from 'react';
import DashboardContainer from "./routes/Dashboard/index";
import './root.css';

class App extends Component {
  render() {
    return (
        <div className="container">
            <DashboardContainer />
        </div>
    );
  }
}

export default App;
