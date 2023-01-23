
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDyFguONk3K-tgIbAqgmyeHQ7IpO89Y9uU",
  databaseURL: "https://work-management-e396f-default-rtdb.firebaseio.com",
  authDomain: "work-management-e396f.firebaseapp.com",
  projectId: "work-management-e396f",
  storageBucket: "work-management-e396f.appspot.com",
  messagingSenderId: "203878766694",
  appId: "1:203878766694:web:2eadc3d3f40360067d75a7",
  measurementId: "G-TWSZ3SYFNL"
};

const fire=firebase.initializeApp(firebaseConfig);



export default fire;