import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBRhcJszdrfhjksGdcrvi7Z3x92N9wf-w0",
    authDomain: "react-shop-46b60.firebaseapp.com",
    databaseURL: "https://react-shop-46b60.firebaseio.com",
    projectId: "react-shop-46b60",
    storageBucket: "react-shop-46b60.appspot.com",
    messagingSenderId: "376477095212",
    appId: "1:376477095212:web:08a24607328a02c76ac889"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;