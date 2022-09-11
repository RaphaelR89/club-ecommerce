import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGM-e8VWg94sHu4uPPlb4JArR7NcCBj4Y",
  authDomain: "club-ecommerce-1958a.firebaseapp.com",
  projectId: "club-ecommerce-1958a",
  storageBucket: "club-ecommerce-1958a.appspot.com",
  messagingSenderId: "440702973734",
  appId: "1:440702973734:web:a3471038e5cfb650c373e7",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
