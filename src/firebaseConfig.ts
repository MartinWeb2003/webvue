import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwETCyxf_YWzOK8eKmfYZG7RRdEVq1JJE",
  authDomain: "web-lab-ac87e.firebaseapp.com",
  projectId: "web-lab-ac87e",
  storageBucket: "web-lab-ac87e.appspot.com",
  messagingSenderId: "681489573574",
  appId: "1:681489573574:web:59d6e2b8c850c7899319c7",
  measurementId: "G-MBP5QK3JF1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(firebaseApp);
