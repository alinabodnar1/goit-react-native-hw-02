// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyPgGm1dzi7PGlTa7K9skwB_aUGmUFIzM",
  authDomain: "my-first-react-native-ap-54b52.firebaseapp.com",
  projectId: "my-first-react-native-ap-54b52",
  storageBucket: "my-first-react-native-ap-54b52.appspot.com",
  messagingSenderId: "652677988407",
  appId: "1:652677988407:web:2f26268538d4d6ab907fb2",
  measurementId: "G-BX1WQV3G36"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

