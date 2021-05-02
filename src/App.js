import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import LogIn from './components/LogIn/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <Route path='/dashboard/appointment'>
           <Dashboard></Dashboard>
          </Route>
          <Route path='/login'>
            <LogIn></LogIn>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
