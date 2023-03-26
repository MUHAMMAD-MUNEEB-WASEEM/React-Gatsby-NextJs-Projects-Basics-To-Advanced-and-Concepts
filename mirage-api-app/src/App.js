import React from 'react';
import './App.css';

import { Todos } from './components/Todo';
import MirageServer from './mirage';


MirageServer()

function App() {
  return (
    <div className="App">
    <Todos />
    </div>
  );
}

export default App;
