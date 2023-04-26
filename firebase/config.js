import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDh-ULcRT-w2pSGSuz0TuHtF7p1BeAZuDo",
  authDomain: "petrol-station-71c3f.firebaseapp.com",
  projectId: "petrol-station-71c3f",
  storageBucket: "petrol-station-71c3f.appspot.com",
  messagingSenderId: "79507541334",
  appId: "1:79507541334:web:5ed1169e15077e9d001af7",
  databaseURL: "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Cloud Firestore and get a reference to the service
export const firestore = getFirestore(app);
