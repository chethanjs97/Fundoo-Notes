import React from 'react';
import './App.css';
import Registration from './components/registration/registration.jsx';
import Signin from './components/signin/signin.jsx';
import ForgotPassword from './components/forgotPassword/forgotPassword.jsx';
import ResetPassword from './components/resetPassword/resetPassword.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetpassword/:token" component={ResetPassword} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
     </BrowserRouter> 
    </div>
  );
}

export default App;
