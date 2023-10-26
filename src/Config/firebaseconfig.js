import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDC9KAFYmZRkZZvfbRdkhGio_1IG1JbV-M",
  authDomain: "imgupload-b4186.firebaseapp.com",
  projectId: "imgupload-b4186",
  storageBucket: "imgupload-b4186.appspot.com",
  messagingSenderId: "381133634662",
  appId: "1:381133634662:web:0e7928fd819ee42e3cc1a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const imgDB = getStorage(app); 
