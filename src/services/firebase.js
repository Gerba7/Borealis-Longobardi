import * as firebase from 'firebase/app';
import { getfirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDfhNh-CgQIIFcrh5EsmBaiRIXBDPKPlk0",
    authDomain: "borealis-longobardi.firebaseapp.com",
    projectId: "borealis-longobardi",
    storageBucket: "borealis-longobardi.appspot.com",
    messagingSenderId: "444011601237",
    appId: "1:444011601237:web:5b4b4caf4635146738a3dc"
  };

  const app = initializeApp(firebaseConfig);

  export const getFirebase = () => {
      return app
  }

  export const db = getFirestore(app)