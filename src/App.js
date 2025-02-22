import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Gallery from './pages/gallery/Gallery';
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import ScrollToTop from './components/scrollToTop/ScrollToTop.jsx';

function App() {
  return (
    <>
        <Router>
            <Header/>
            <ScrollToTop/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>

    </>
  )
}

export default App;
