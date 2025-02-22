import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';

function App() {
  return (
    <>
        <Router>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            {/* <ScrollAd/> */}
            {/* <Footer/> */}
        </Router>

    </>
  )
}

export default App;
