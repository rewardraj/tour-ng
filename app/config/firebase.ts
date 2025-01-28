import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBAPIKEY,
  authDomain: import.meta.env.VITE_FBAUTHDOMAIN,
  projectId: import.meta.env.VITE_FBPROJECTID,
  storageBucket: import.meta.env.VITE_FBSTORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_FBAPPID,
  measurementId: import.meta.env.VITE_FBMEASUREMENTID,
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
