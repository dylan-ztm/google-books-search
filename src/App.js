import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
//import Contact from './Components/Contact/Contact';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import MainFooter from './Components/MainFooter/MainFooter';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// App Component
const App = () => {

  return (
    <Router>
      <div className="AppWrapper flex flex-column">
        <NavigationBar />
        <Switch>
            <Route exact path="/about"          component={About} />
            {/*<Route exact path="/contact"        component={Contact} /> */}
            <Route exact path="/"               component={Home} />
            <Route path="*"                     component={PageNotFound} />
        </Switch>
        <MainFooter />
      </div>
    </Router>
  );
} // end App

export default App;