import React from 'react';
import { Route, Router } from 'react-router-dom';

import Login from './views/login';

class App extends React.Component {


  render() {
    return (
      <div className="App">
          <Route exact path="/login" render={props => <Login {...props} />} />
      </div>
    );
  }
}


export default App;
