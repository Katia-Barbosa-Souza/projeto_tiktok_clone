import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCk9FJ_p-JynnBtfRdWOx6YnMRjyXTOfAs",
  authDomain: "tiktok-clone-jornada.firebaseapp.com",
  projectId: "tiktok-clone-jornada",
  storageBucket: "tiktok-clone-jornada.appspot.com",
  messagingSenderId: "544694430332",
  appId: "1:544694430332:web:ab93ce11a830d7494077f9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;