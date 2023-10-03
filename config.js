import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCyPgGm1dzi7PGlTa7K9skwB_aUGmUFIzM",
//   authDomain: "my-first-react-native-ap-54b52.firebaseapp.com",
//   projectId: "my-first-react-native-ap-54b52",
//   storageBucket: "my-first-react-native-ap-54b52.appspot.com",
//   messagingSenderId: "652677988407",
//   appId: "1:652677988407:web:2f26268538d4d6ab907fb2",
//   measurementId: "G-BX1WQV3G36"
// };
const firebaseConfig = {
  apiKey: "AIzaSyA5OngRJrrCk-3XggAQ1SACF0ElKmgTitc",
  authDomain: "share-pictures-2f96a.firebaseapp.com",
  projectId: "share-pictures-2f96a",
  storageBucket: "share-pictures-2f96a.appspot.com",
  messagingSenderId: "563615306237",
  appId: "1:563615306237:web:791140d48fcc821fba4994",
  measurementId: "G-TH6G6KX9NJ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

