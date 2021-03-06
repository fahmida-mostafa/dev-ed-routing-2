import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PokeDetail from './components/PokeDetail';
import PokeList from './components/PokeList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pokelist/:num" component={PokeList} />
          <Route path="/pokemon/:name" component={PokeDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
