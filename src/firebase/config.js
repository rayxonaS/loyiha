import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB4UsR8qdt5IOELXc8VW17PgBpyNAHCS8",
  authDomain: "recepies-8a852.firebaseapp.com",
  projectId: "recepies-8a852",
  storageBucket: "recepies-8a852.firebasestorage.app",
  messagingSenderId: "305815342696",
  appId: "1:305815342696:web:c89725d1abeef0f10ff5dd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
