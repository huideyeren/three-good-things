import firebase from 'firebase';

if (firebase.apps.length !== 0) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBZpooZ-llIeAO9QGv10oCxWYaPccCJyhs',
    authDomain: 'three-good-things-6f3c4.firebaseapp.com',
    databaseURL: 'https://three-good-things-6f3c4.firebaseio.com',
    projectId: 'three-good-things-6f3c4',
    storageBucket: 'three-good-things-6f3c4.appspot.com',
    messagingSenderId: '561694552053',
  });
}

export default firebase;
