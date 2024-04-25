import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBTI35tRd1EYsRdh9GZqJH9Gr1OKKg7DHY",
  authDomain: "mern-ecommerce-6248c.firebaseapp.com",
  projectId: "mern-ecommerce-6248c",
  storageBucket: "mern-ecommerce-6248c.appspot.com",
  messagingSenderId: "398756204821",
  appId: "1:398756204821:web:bebaa5ed236c5ae192191c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
