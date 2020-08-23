import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Router>
          <Main path="/"/>
          <Create path="/authors/new" />
      </Router>
    </div>
  );
}

export default App;
