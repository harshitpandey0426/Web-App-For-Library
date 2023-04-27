import React from 'react';
import './App.css';
import Navbar from './Layouts/NavbarAndFooter/Navbar';
import Footer from './Layouts/NavbarAndFooter/Footer';
import HomePage from './Layouts/HomePage/HomePage';
import SearchBook from './Layouts/SearchBooksPage/SearchBookPage'
import { Route } from 'react-router-dom';
import SearchBookPage from './Layouts/SearchBooksPage/SearchBookPage';
import BookCheckoutPage from './Layouts/BookCheckoutPage/BookCheckoutPage'
import { Redirect, Switch } from 'react-router';

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar />
      <div className='flex-grow-1'>
        {/* switch is needed because with /search '/'  conntent(HomePage) will also be loaded */}
        <Switch>

          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>

          <Route path='/home'>
            <HomePage />
          </Route>

          <Route path='/search'>
            <SearchBookPage />
          </Route>

          <Route path='/checkout/:bookId'>
            <BookCheckoutPage />
          </Route>

        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
