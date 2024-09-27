import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBzHaYRqut_cUdsvZIPzO-Qf32gWmrhJ54",
    authDomain: "ecommerceproapp.firebaseapp.com",
    projectId: "ecommerceproapp",
    storageBucket: "ecommerceproapp.appspot.com",
    messagingSenderId: "578311186985",
    appId: "1:578311186985:web:ac29c7decc623636834a38",
    measurementId: "G-J36X6H6KES"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db};