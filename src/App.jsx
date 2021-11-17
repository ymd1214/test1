import './styles/style.css';
import React from 'react';
import { 
  BrowserRouter,
  Route,
  Routes} from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Blog from './Blog'

const App = () => {
  return (
    <div class="home">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="blog" element={<Blog />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;