import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


function App() {
  return (
    <div className="App" style={{ position: 'relative', minHeight: '100vh' }} >
      <div style={{ paddingBottom: '2.5rem' }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
