// db.js

import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyAzTLN-vUMY1MczmcLStXOf72n26QL9aJg',
  authDomain: 'todolist-1d613.firebaseapp.com',
  databaseURL: 'https://todolist-1d613.firebaseio.com',
  projectId: 'todolist-1d613',
  storageBucket: 'todolist-1d613.appspot.com',
  messagingSenderId: '336305056708',
};
if (!Firebase.apps.length) {
  Firebase.initializeApp(config);
}

export const db = Firebase.database();
