import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
