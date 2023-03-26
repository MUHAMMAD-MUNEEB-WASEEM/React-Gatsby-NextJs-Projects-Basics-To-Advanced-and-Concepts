import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './components/Taskbox/redux';
import InboxScreen from './components/Taskbox/index';



function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
