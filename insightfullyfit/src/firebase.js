import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDZCFmw8b5xDKCdJvdxIB1qSWXLW7Jpwck",
  authDomain: "insightfully-fit.firebaseapp.com",
  projectId: "insightfully-fit",
  storageBucket: "insightfully-fit.appspot.com",
  messagingSenderId: "749559071709",
  appId: "1:749559071709:web:c9249e0a6f9a8b6e4a2c34",
  measurementId: "G-TR1ZJMWQPK"
};

firebase.initializeApp(firebaseConfig)
const databaseRef = firebase.database().ref()
export const insightfullyfitRef = databaseRef.child('insightfullyfit')
export default firebase