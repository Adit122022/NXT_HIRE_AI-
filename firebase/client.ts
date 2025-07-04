// Import the functions you need from the SDKs you need
import { initializeApp , getApp ,getApps } from "firebase/app";
 import {getAuth} from 'firebase-admin/auth'
import {getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBMBslMmCynOzyiw1kg9jSlRiQsWSL2Sk8",
  authDomain: "ai-hr-f8f8e.firebaseapp.com",
  projectId: "ai-hr-f8f8e",
  storageBucket: "ai-hr-f8f8e.firebasestorage.app",
  messagingSenderId: "758800149534",
  appId: "1:758800149534:web:770f15d60d8d316e4f520f",
  measurementId: "G-ZPQJX0TRL3"
  
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);