import React from 'react'
import './App.css';
import Home from './pages/Home'
import Menu from '../src/components/Menu'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Gallery from '../src/pages/Gallery';
import Contacts from '../src/pages/Contacts';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
    <MessengerCustomerChat
    pageId="107713631020253"
    appId="2569460616679861"
  />
    </Router>
    
  );
}

export default App;
