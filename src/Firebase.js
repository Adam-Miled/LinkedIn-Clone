import { initializeApp } from 'firebase/app';
import * as Firebase from 'firebase';
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCf43DzGrTuU5iweJu97Z-PK0PXxZg85EM",
    authDomain: "linkedin-clone-6c8b7.firebaseapp.com",
    projectId: "linkedin-clone-6c8b7",
    storageBucket: "linkedin-clone-6c8b7.appspot.com",
    messagingSenderId: "820464948688",
    appId: "1:820464948688:web:3955572fec85d8a4b4d5d5"
  };


 const firebaseApp = initializeApp(firebaseConfig)
  const db = firebaseApp.Firebase() ; 
  const auth = firebaseApp.auth() ; 


  export { db , auth} ; 