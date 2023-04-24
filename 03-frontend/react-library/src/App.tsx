import React from 'react';
import './App.css';
import Navbar from './Layouts/NavbarAndFooter/Navbar';
import Footer from './Layouts/NavbarAndFooter/Footer';
import HomePage from './Layouts/HomePage/HomePage';
import SearchBook from './Layouts/SearchBooksPage/SearchBookPage'

function App() {
  return (
    <div>
    <Navbar/>
    {/* <HomePage/> */}
    <SearchBook/>
    <Footer/>
    </div>
  );
}

export default App;
