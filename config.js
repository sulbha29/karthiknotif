import firebase from 'firebase'
require("@firebase/firestore")


var firebaseConfig = {
  apiKey: "AIzaSyCkDtsHZkMFtyTa-G-IExp1gqbb37KiMVY",
  authDomain: "krthikc79.firebaseapp.com",
  projectId: "krthikc79",
  storageBucket: "krthikc79.appspot.com",
  messagingSenderId: "321606734402",
  appId: "1:321606734402:web:604b065c4e974af6e813db"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
  