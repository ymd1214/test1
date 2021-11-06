import './styles/style.css';
import React from 'react';
import Header from './Header';

class Blog extends React.Component{

  render() {
    return(
        <div class="home">
          <Header/>

          <div class="content">
            <h1>最新記事一覧</h1>
          </div>
        </div>
    )
  }
}

export default Blog;