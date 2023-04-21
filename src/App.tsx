import React from 'react';
import './App.css';
import Navbar from './Layouts/NavbarAndFooter/Navbar';
import ExploreTopBooks from './Layouts/HomePage/ExploreTopBooks';
import Carousel from './Layouts/HomePage/Carousel';
import ReturnBook from './Layouts/HomePage/ReturnBook';

function App() {
  return (
    <div>
    <Navbar/>
    <ExploreTopBooks/>
    <Carousel/>
    </div>
  );
}

export default App;
