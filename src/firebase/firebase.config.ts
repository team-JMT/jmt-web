// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxvwF7rWPLjNwC2ER6PDPuA_JGAXXgbNY',
  authDomain: 'jmt-web.firebaseapp.com',
  projectId: 'jmt-web',
  storageBucket: 'jmt-web.appspot.com',
  messagingSenderId: '670057372365',
  appId: '1:670057372365:web:6541282174ce8c2ea5e784',
  measurementId: 'G-CEWD9WBJ6L',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
