import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import New from './pages/ProductPage/New';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/mypage' element={<Mypage />}/>
          <Route path='/new' element={<New />}/>
          <Route path='/diffuser' element={<Diffuser />}/>
          <Route path='/perfume' element={<Perfume />}/>
        </Routes>
    </Router>
  );
}

export default App;