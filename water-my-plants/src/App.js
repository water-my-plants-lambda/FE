import React from 'react';
import { Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import PlantForm from './views/PlantForm'
import PrivateRoute from './components/PrivateRoute';
import Register from './views/Register';
import PlantPage from './views/PlantPage';
import Profile from './views/Profile';
import LoadUser from './components/LoadUser'
import Logout from './views/Logout'
import Navigation from './components/Nav';


class App extends React.Component {


  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <LoadUser {...props} />} />
        <Route path="/" render={props => <Navigation {...props} />} />
          <Route exact path="/" component={Home} />
          <Route exact path="/plants" component={Home} />
          <Route exact path="/plants/add" component={PlantForm} />
          <Route exact path="/plants/:id(\d+)" component={PlantPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/logout" render={props => <Logout {...props} />} />
      </div>
    );
  }
}


export default App;
