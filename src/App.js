import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import MainFooter from './Components/MainFooter/MainFooter';

// App Component
const App = () => {

  return (
    <div className="AppWrapper flex flex-column">
      <Home />
      <MainFooter />
    </div>
  );
} // end App

export default App;