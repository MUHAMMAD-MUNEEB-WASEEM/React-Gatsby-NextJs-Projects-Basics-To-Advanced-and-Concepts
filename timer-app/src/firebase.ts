import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDnZp0VO_sxxOnQtcf5eGDcsGzita9c_Fc",
  authDomain: "timer-app-6f891.firebaseapp.com",
  projectId: "timer-app-6f891",
  storageBucket: "timer-app-6f891.appspot.com",
  messagingSenderId: "476493702093",
  appId: "1:476493702093:web:ace1396ff0928aba561a84",
  measurementId: "G-1Z2KLVYKEH"
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