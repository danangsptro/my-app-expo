import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDNbxKUBID3dIRzyxdCbOyZMcAAy03kNw",
  authDomain: "notiftest-9f863.firebaseapp.com",
  projectId: "notiftest-9f863",
  storageBucket: "notiftest-9f863.appspot.com",
  messagingSenderId: "1028390212826",
  appId: "1:1028390212826:web:a0ce0edb782ad79f5581e3",
};

initializeApp(firebaseConfig);
export const auth = getAuth();

