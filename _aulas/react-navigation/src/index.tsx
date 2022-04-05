import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './components/About';
import { ComponentWithParam } from './components/ComponentWithParams';
import { ComponentWithQuery } from './components/ComponentWithQuery';
import { Home } from './components/Home';
import { Menu } from './components/Menu';
import { NotFound } from './components/NotFound';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <div className='gradient'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/param/:id' element={<ComponentWithParam />}></Route>
          <Route path='/query' element={<ComponentWithQuery />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
