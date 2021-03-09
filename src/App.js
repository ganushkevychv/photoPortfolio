import React from 'react'
import './App.css';
import Home from './pages/Home'
import Menu from '../src/components/Menu'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gallery from '../src/pages/Gallery';
import Contacts from '../src/pages/Contacts';

function App() {
  return (
    <Router>
    <div className="App">
      <Menu/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/Gallery" component={Gallery}/>
    <Route path="/Contacts" component={Contacts}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
