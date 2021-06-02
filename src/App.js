import React from 'react';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Mail from './Mail.js';
import EmailList from './EmailList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Section from './Section.js'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Welcome To React</h1>
       <Header />

       <div className="app-body">
       <Sidebar />
       <Switch>
         <Route path="/mail">
           <Mail />
         </Route>
         <Route path="/">
           <EmailList />
         </Route>
       </Switch>
       </div>
      </div>
    </Router>
  );
}

export default App;
