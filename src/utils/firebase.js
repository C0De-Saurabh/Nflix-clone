// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2P4269v4lqsyZk-j9kIzVYek_xmNDo3Q",
  authDomain: "netflixclone-b9244.firebaseapp.com",
  projectId: "netflixclone-b9244",
  storageBucket: "netflixclone-b9244.appspot.com",
  messagingSenderId: "345175164077",
  appId: "1:345175164077:web:06205587e9f638c705b224",
  measurementId: "G-EB7974DSMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();