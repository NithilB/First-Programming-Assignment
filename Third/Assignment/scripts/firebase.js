import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRGwQsNGVYErAtEPif_Nyj0A2CbKDQkSI",
  authDomain: "first-c4b0a.firebaseapp.com",
  databaseURL: "https://first-c4b0a-default-rtdb.firebaseio.com",
  projectId: "first-c4b0a",
  storageBucket: "first-c4b0a.appspot.com",
  messagingSenderId: "355161999791",
  appId: "1:355161999791:web:607a567ec37b32d413875a",
  measurementId: "G-RJGK2G9QYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };