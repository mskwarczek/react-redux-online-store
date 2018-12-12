import React, { Component } from 'react';

import Router from './Router';
import Navigation from './presentational/Navigation';

class App extends Component {
  render() {
    return (
        <div>
            <Navigation />
            <Router />
        </div>
    );
  }
}

export default App;
