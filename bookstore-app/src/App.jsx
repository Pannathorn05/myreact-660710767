// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import NotFound from './components/NotFound';
import BookPage from './pages/BookPage';
import Category from './pages/Category';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (

    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/books" element={<BookPage />} />
          <Route path="/category/fiction" element={<Category />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;