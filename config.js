import * as firebase from 'firebase'
require('@firebase/firestore')

// const firebaseConfig = {
//     apiKey: "AIzaSyBvlTqPRoJgvR8Ef2hh6_sNSEDzw_w2Elc",
//     authDomain: "willy-c9942.firebaseapp.com",
//     projectId: "willy-c9942",
//     storageBucket: "willy-c9942.appspot.com",
//     messagingSenderId: "233293381376",
//     appId: "1:233293381376:web:12827dd7a95db48173bde5"
//   };
  //Initialize Firebase

  const firebaseConfig = { apiKey: "AIzaSyCsJB2Of7yl2yBvdUeB0pcfS9uxB8Ap6v4",
   authDomain: "willy-91955.firebaseapp.com",
    databaseURL: "https://willy-91955.firebaseio.com",
     projectId: "willy-91955",
      storageBucket: "willy-91955.appspot.com",
   messagingSenderId: "27165354604",
     appId: "1:27165354604:web:4c536d53811a1c5dc50649" };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();