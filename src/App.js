import React from 'react';
import Home from './components/Home';
import About from './components/About';
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route  } from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
