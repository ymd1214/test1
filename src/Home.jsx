import './styles/style.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {intro, link, logo, logo2, bgimg} from './img/index';
import Divider from '@mui/material/Divider';
import News from './News'

const Home = () => {
  return (
      <div class="content">
        
        <div>
          <img class="intro" src={intro} alt="introduction" />
        </div>
        
        <p>新着情報</p>
        <div class='news'>
          <Divider />
          <News to='blog' ymd='2021.11.05' title='aaa'/>
          <Divider />
          <News to='blog' ymd='2021.11.05' title='bbb'/>
          <Divider />
          <News to='blog' ymd='2021.11.05' title='ccc'/>
          <Divider />
          <News to='blog' ymd='2021.11.05' title='ddd'/>
          <Divider />
        </div>
        <Link to='blog' class='blogLink'>ブログ記事一覧へ</Link>
      </div>
  );
}

export default Home;