// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZC3HGgHfOfliJKp53ZNSR9NDOMpF_NAk",
  authDomain: "netflixgpt-93528.firebaseapp.com",
  projectId: "netflixgpt-93528",
  storageBucket: "netflixgpt-93528.appspot.com",
  messagingSenderId: "683122421467",
  appId: "1:683122421467:web:ddf8310d3bd934886d66fe",
  measurementId: "G-RC7C34HDCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();