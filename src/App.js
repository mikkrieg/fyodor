import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import {AppProvider} from './AppContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <AppProvider>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </AppProvider>
  );
}

export default App;
