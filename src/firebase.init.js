import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwYPwl8vHCNaHp29qslBWbqzKqTklsTDA",
  authDomain: "auth-moha-milon-d8188.firebaseapp.com",
  projectId: "auth-moha-milon-d8188",
  storageBucket: "auth-moha-milon-d8188.firebasestorage.app",
  messagingSenderId: "442174396354",
  appId: "1:442174396354:web:801877321646b6f718a85b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);