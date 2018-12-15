import React, { Component } from 'react';

import Router from './Router';
import Header from './presentational/Header';
import Navigation from './presentational/Navigation';
import Footer from './presentational/Footer';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Navigation />
            <Router />
            <Footer />
        </div>
    );
  }
}

export default App;
