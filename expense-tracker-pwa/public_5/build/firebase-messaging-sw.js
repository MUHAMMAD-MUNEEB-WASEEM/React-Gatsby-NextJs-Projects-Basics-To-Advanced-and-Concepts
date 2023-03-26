importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
  apiKey: "AIzaSyACwfIO4JgMIglU4u-DrQ1PEtCXb1ndR1U",
  authDomain: "expense-tracker-pwa-3.firebaseapp.com",
  databaseURL: "https://expense-tracker-pwa-3.firebaseio.com",
  projectId: "expense-tracker-pwa-3",
  storageBucket: "expense-tracker-pwa-3.appspot.com",
  messagingSenderId: "668136596411",
  appId: "1:668136596411:web:982886a2e9d6bff619da9e"

  })

firebase.messaging();