import firebase from 'firebase/app';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyCioJymV3jkiKChHrE8RZ8xSAfAOv1lW84",
  authDomain: "appletouch-c9f7c.firebaseapp.com",
  projectId: "appletouch-c9f7c",
  storageBucket: "appletouch-c9f7c.appspot.com",
  messagingSenderId: "494262047899",
  appId: "1:494262047899:web:d2515adf092078d201623e"
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

