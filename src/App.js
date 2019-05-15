import React from 'react';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";




function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
  );
}

export default App;
