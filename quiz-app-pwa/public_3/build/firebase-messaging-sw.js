importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
  apiKey: "AIzaSyBOTwH8hGzLvXsONse3yh-hi-n25z6tASc",
  authDomain: "quiz-app-pwa-59af6.firebaseapp.com",
  databaseURL: "https://quiz-app-pwa-59af6.firebaseio.com",
  projectId: "quiz-app-pwa-59af6",
  storageBucket: "quiz-app-pwa-59af6.appspot.com",
  messagingSenderId: "920316495849",
  appId: "1:920316495849:web:5f0cd0f5b0bc8b6f00ed78"
  })

firebase.messaging();