import React, { Component } from 'react';

import Router from './Router';
import Navigation from './presentational/Navigation';
import Footer from './presentational/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Router />
                <Footer />
                <Navigation />
            </div>
        );
    }
}

export default App;
