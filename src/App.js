import React, { Component } from 'react';

// Import Components
import routes from './routes'
import Header from './component/Header/Header';

// Import Styles
import './App.css';
import './styles/resets.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
  }
}

export default App;
