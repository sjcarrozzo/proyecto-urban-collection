import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwzNOpHvveFNlC4kmdpzG219Lcw3qFVu8",
  authDomain: "urban-collection.firebaseapp.com",
  projectId: "urban-collection",
  storageBucket: "urban-collection.appspot.com",
  messagingSenderId: "606690544676",
  appId: "1:606690544676:web:bc7cf5c2ed2a3f88811cb1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);