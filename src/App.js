import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/footer';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage';
import New from './pages/ProductPage/New';
import Diffuser from './pages/ProductPage/Diffuser';
import Perfume from './pages/ProductPage/Perfume';
import ToolBar from './components/ToolBar';

function App() {
  return (
    <Router>
      <Header />
      <ToolBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/mypage' element={<Mypage />}/>
          <Route path='/new' element={<New />}/>
          <Route path='/diffuser' element={<Diffuser />}/>
          <Route path='/perfume' element={<Perfume />}/>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;