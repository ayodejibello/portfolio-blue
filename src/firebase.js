import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA_KiSFcyZidgMAmpUSS3d_wCKjVQY5LGQ",
  authDomain: "portfolio-blue.firebaseapp.com",
  projectId: "portfolio-blue",
  storageBucket: "portfolio-blue.firebasestorage.app",
  messagingSenderId: "1093075405254",
  appId: "1:1093075405254:web:81eda0f4640f7541318ac7",
  measurementId: "G-H7318TS2DD",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
