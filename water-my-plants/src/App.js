import React from 'react';
import { Route } from 'react-router-dom';

import Login from './views/Login';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
          <Route exact path="/login" render={props => <Login {...props} />} />
      </div>
    );
  }
}


export default App;
