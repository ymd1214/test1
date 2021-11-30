import './styles/home.css';
import React from 'react';
import {Link} from 'react-router-dom'
import {intro, sample1, sample2, sample3, sample4} from './img/index';
import Divider from '@mui/material/Divider';
import News from './News'

const Home = () => {
  return (
      <div class="content">
        
        <div>
          <img class="intro" src={intro} alt="introduction" />
        </div>
        
        <p class='newsTop'>新着情報</p>
        <div class='news'>
          <Divider />
          <News to='blog' img={sample1} title='aaa' ymd='2021.11.05'/>
          <Divider />
          <News to='blog' img={sample2} title='bbb' ymd='2021.11.05'/>
          <Divider />
          <News to='blog' img={sample3} title='ccc' ymd='2021.11.05'/>
          <Divider />
          <News to='blog' img={sample4} title='ddd' ymd='2021.11.05'/>
          <Divider />
        </div>
        <Link to='blog' class='blogLink'>ブログ記事一覧へ</Link>
      </div>
  );
}

export default Home;