  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA6N0oHNK2t9D3ju0DQVS1usxtsbCKcL8c",
    authDomain: "great-smoothies.firebaseapp.com",
    databaseURL: "https://great-smoothies.firebaseio.com",
    projectId: "great-smoothies",
    storageBucket: "great-smoothies.appspot.com",
    messagingSenderId: "627408211083",
    appId: "1:627408211083:web:448bd3361bac20e03fd88e"
  };
  // Initialize Firebase
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 export default firebaseApp.firestore()