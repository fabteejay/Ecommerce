import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var Config = {
  apiKey: "AIzaSyBeHtYj0YDqRtdIuSRgTdHyXLAXZV4cR9w",
  authDomain: "pacific-professional.firebaseapp.com",
  databaseURL: "https://pacific-professional.firebaseio.com",
  projectId: "pacific-professional",
  storageBucket: "",
  messagingSenderId: "322006304524",
  appId: "1:322006304524:web:532fe98ee9b0cc9839ab29"
};

firebase.initializeApp(Config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
