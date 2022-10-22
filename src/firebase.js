import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4tg5-ORUUeogIYPA27I8we2xKXaN7vSc",
  authDomain: "chat-66d61.firebaseapp.com",
  projectId: "chat-66d61",
  storageBucket: "chat-66d61.appspot.com",
  messagingSenderId: "241155241673",
  appId: "1:241155241673:web:0d50737b84725a2e9e7f18",
  measurementId: "G-9C72R6L872"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();