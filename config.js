// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: 'aSXbAiTceuYFfGoS3WZqiETcr-Y9V5WUTTXMu9DkFlXg',
  authDomain: 'goit-react-native-hw-app-deb9f.firebaseapp.com',
  databaseURL: 'https://goit-react-native-hw-app-deb9f.firebaseio.com',
  projectId: 'goit-react-native-hw-app-deb9f',
  storageBucket: 'goit-react-native-hw-app-deb9f.appspot.com',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);