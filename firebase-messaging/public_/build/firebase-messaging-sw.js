

importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js')


firebase.initializeApp({
    apiKey: "AIzaSyApEWq78NtkL1Nat2EjQTDo8JNUzICpwHg",
    authDomain: "fir-messaging-8a598.firebaseapp.com",
    databaseURL: "https://fir-messaging-8a598.firebaseio.com",
    projectId: "fir-messaging-8a598",
    storageBucket: "fir-messaging-8a598.appspot.com",
    messagingSenderId: "977640798956",
    appId: "1:977640798956:web:b46e60a6846115301103c9"
  })

firebase.messaging();