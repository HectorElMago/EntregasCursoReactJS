import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAytCyPMZGD2Be_nCZ_CaRjUeUJQcSJOd4",
  authDomain: "coderreact-de9f6.firebaseapp.com",
  projectId: "coderreact-de9f6",
  storageBucket: "coderreact-de9f6.appspot.com",
  messagingSenderId: "533690812959",
  appId: "1:533690812959:web:12701fbb4632e84a11232a",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
