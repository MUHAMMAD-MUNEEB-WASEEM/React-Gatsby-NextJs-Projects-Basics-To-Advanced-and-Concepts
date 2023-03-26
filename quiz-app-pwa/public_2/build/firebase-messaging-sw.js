importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
  apiKey: "AIzaSyA2Q4algE13LR9_h-zWkoWxTSpnsk0kiBI",
  authDomain: "quiz-app-pwa-62e3a.firebaseapp.com",
  databaseURL: "https://quiz-app-pwa-62e3a.firebaseio.com",
  projectId: "quiz-app-pwa-62e3a",
  storageBucket: "quiz-app-pwa-62e3a.appspot.com",
  messagingSenderId: "364311646538",
  appId: "1:364311646538:web:a3ebb4bc822d74bc7ff1b3"
  })

firebase.messaging();