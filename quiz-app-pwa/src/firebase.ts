import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBOTwH8hGzLvXsONse3yh-hi-n25z6tASc",
  authDomain: "quiz-app-pwa-59af6.firebaseapp.com",
  databaseURL: "https://quiz-app-pwa-59af6.firebaseio.com",
  projectId: "quiz-app-pwa-59af6",
  storageBucket: "quiz-app-pwa-59af6.appspot.com",
  messagingSenderId: "920316495849",
  appId: "1:920316495849:web:5f0cd0f5b0bc8b6f00ed78"
  };

firebase.initializeApp(config);
var messaging = firebase.messaging();

export const configNotification = () => {
    
        Notification.requestPermission().then((permission) => {
            messaging.getToken().then((currentToken) => {
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