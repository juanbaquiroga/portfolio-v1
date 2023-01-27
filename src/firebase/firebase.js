import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC7h34ci0lKxHdan5snWyremZpqL0weNz4",
  authDomain: "portfolio-ea5ae.firebaseapp.com",
  projectId: "portfolio-ea5ae",
  storageBucket: "portfolio-ea5ae.appspot.com",
  messagingSenderId: "857846252778",
  appId: "1:857846252778:web:9b0660448fa05a19358393"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)