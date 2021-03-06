import React, { Component } from 'react';
import logo from './logo.svg';
import Basic from './components/Basic';
import ParamsExample from './components/UrlParameters';
import CustomLink from './components/CustomLink';
import Auth from './components/Auth';
import NoMatchExample from './components/NoMatch';
import StaticRouter from './components/StaticRouter';
import ParamsExm from './components/queryParams';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}

        <Basic/>
        <hr/>
        <ParamsExample/>
        <hr/>
        <Auth/>
        <hr/>
        <CustomLink/>
        <hr/>
        <NoMatchExample/>
        <hr/>
        <StaticRouter/>
        <hr/>
        <ParamsExm/>
      </div>
    );  
  }
}

export default App;
