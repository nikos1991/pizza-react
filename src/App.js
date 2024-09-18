import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import Cart from './pages/Cart';
import Home from './pages/Home';



function App() {
     return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
             <Route path="/cart" element={<Cart />} />
         </Routes>
    </Router>  

      );
}

export default App;
