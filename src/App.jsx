import './styles/style.css';
import React from 'react';
import {intro, link, logo, logo2, bgimg} from './img/index';

class App extends React.Component{

  render() {
    return(
      <div class="home">

        <div class="header">
          <div class="header_logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        
        <br />
        <br />
        <br />
        <br />

        <div class="content">
          <div>
            <img class="intro" src={intro} alt="introduction" />
          </div>
          <div>
            <img class="link" src={link} alt="link" />
          </div>
        </div>

      </div>
    )
  }
}

export default App;