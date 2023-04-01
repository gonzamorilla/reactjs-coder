import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCommjvGUOcAEQRPA4ulJN0auOxnWxzqvo",
  authDomain: "proyecto-coderhouse-cf1dc.firebaseapp.com",
  projectId: "proyecto-coderhouse-cf1dc",
  storageBucket: "proyecto-coderhouse-cf1dc.appspot.com",
  messagingSenderId: "200469702507",
  appId: "1:200469702507:web:4f7d65102b0704078a8e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db