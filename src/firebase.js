// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth/web-extension";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth/cordova";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEPb_zpkufHJWeVjPPuCuNvIhc7FYyRiU",
  authDomain: "netflix-clone-1d281.firebaseapp.com",
  projectId: "netflix-clone-1d281",
  storageBucket: "netflix-clone-1d281.firebasestorage.app",
  messagingSenderId: "703246355992",
  appId: "1:703246355992:web:473fdcaa57dfc0e56fbd6d",
  measurementId: "G-1CLNC4V2TH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/'[1].split('-').join(' ')))
  }
};

const login = async (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/'[1].split('-').join(' ')));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
