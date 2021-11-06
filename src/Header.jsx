import './styles/header.css';
import React from 'react';
import {logo} from './img/index';


class Header extends React.Component{

  render() {
    return(
      <div>
        <div class="header">
          <div class="header_logo">
            <img src={logo} alt="logo" />
          </div>
        </div> 
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }
}

export default Header;