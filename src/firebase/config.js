import firebase from 'firebase/app';
// SERVICES
import 'firebase/auth';
import 'firebase/firestore';

// Config file
const firebaseConfig = {
  apiKey: 'AIzaSyDuyIhA7--QwXxw6v668-Ew5NpmeNdmhZk',
  authDomain: 'candleaf-react-portofolio.firebaseapp.com',
  projectId: 'candleaf-react-portofolio',
  storageBucket: 'candleaf-react-portofolio.appspot.com',
  messagingSenderId: '1087798032797',
  appId: '1:1087798032797:web:225783038f07202ba85774',
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

// Init Services
const auth = firebase.auth();
const firestore = firebase.firestore();

// EXPORTS
export { auth, firestore };
