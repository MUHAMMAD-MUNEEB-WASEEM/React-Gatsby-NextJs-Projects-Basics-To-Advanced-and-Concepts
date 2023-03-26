import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyACwfIO4JgMIglU4u-DrQ1PEtCXb1ndR1U",
  authDomain: "expense-tracker-pwa-3.firebaseapp.com",
  databaseURL: "https://expense-tracker-pwa-3.firebaseio.com",
  projectId: "expense-tracker-pwa-3",
  storageBucket: "expense-tracker-pwa-3.appspot.com",
  messagingSenderId: "668136596411",
  appId: "1:668136596411:web:982886a2e9d6bff619da9e"
  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

export function configNotification() {
    
  Notification.requestPermission().then((permission) => {
      messaging.getToken().then((currentToken) => {
        alert(currentToken);
        prompt('token', currentToken);
        console.log(currentToken)
        
        if (currentToken) {
        } else {
          // Show permission request.
          console.log('No registration token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
  
  
  })

}