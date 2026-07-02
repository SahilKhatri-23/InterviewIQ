// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-2ce90.firebaseapp.com",
  projectId: "interviewiq-2ce90",
  storageBucket: "interviewiq-2ce90.firebasestorage.app",
  messagingSenderId: "468790713967",
  appId: "1:468790713967:web:5ed1e70a60fe9c30b0779a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// enabling authentication providers

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider };

