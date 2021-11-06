import './styles/style.css';
import React from 'react';
import { Router, Route, BrowserRouter} from 'react-router-dom'
import {intro, link, logo, logo2, bgimg} from './img/index';
import Divider from '@mui/material/Divider';
import Header from './Header';
import News from './News';

const App = () =>{
  return(
  <BrowserRouter>
        
            <Route path="/" component={aa} />

      </BrowserRouter>
      )
}

const aa = () =>{
  return(
    <div>
    <h1>
      画面遷移
    </h1>
    </div>
  )
}

export default App;