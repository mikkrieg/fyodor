import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/' index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
