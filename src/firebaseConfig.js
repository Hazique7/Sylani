
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCy3wCifpPc360Aymz248jHOH7wndoPrlA",
  authDomain: "saylani-app-5f2cb.firebaseapp.com",
  projectId: "saylani-app-5f2cb",
  storageBucket: "saylani-app-5f2cb.appspot.com",
  messagingSenderId: "403803992386",
  appId: "1:403803992386:web:348f001c51ef16c843d8db",
  measurementId: "G-1C79ZJXRSL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
