import logo from './logo.svg';
import './App.css';
//importing firebase

import firebase from "./firebase";

function App() {

  const messaging = firebase.messaging();
  messaging.requestPermission().then(()=>{
    return messaging.getToken()
  }).then((token) => {
      alert(token);
      prompt('token', token);
      console.log('token', token);
    });

  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
