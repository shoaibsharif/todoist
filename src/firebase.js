import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyDUwr_hZaF_UbRxUyHWughwrWCsn-3KDiE',
  authDomain: 'todoist-3d9d3.firebaseapp.com',
  databaseURL: 'https://todoist-3d9d3.firebaseio.com',
  projectId: 'todoist-3d9d3',
  storageBucket: 'todoist-3d9d3.appspot.com',
  messagingSenderId: '876339003557',
  appId: '1:876339003557:web:f2267d4b60ccfd05'
});

export default firebaseConfig;
