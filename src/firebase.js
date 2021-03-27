import firebase from 'firebase';


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyD4IW9QnNMQTHYGXUZs3Bn-erUuWQzwfls",
  authDomain: "clone-51809.firebaseapp.com",
  projectId: "clone-51809",
  storageBucket: "clone-51809.appspot.com",
  messagingSenderId: "20580889462",
  appId: "1:20580889462:web:e7e669a0c162ed44368057",
  measurementId: "G-HN5FFZN98F"

})


const auth=firebase.auth();


export {auth};