import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBC7RFqpGk4ffEA_0bzYMRCYZItdDoeOrQ",
  authDomain: "streaming-76d46.firebaseapp.com",
  projectId: "streaming-76d46",
  storageBucket: "streaming-76d46.appspot.com",
  messagingSenderId: "285083704831",
  appId: "1:285083704831:web:8660fd196b8eb0524bdbca"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);