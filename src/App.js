import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home/Home.js';
import Error from './pages/404Page/404Page'
import Header from './components/Header/Header';
import Contact from './pages/Contact/Contact';
import UpcomingEvents from './pages/UpcomingEvents/UpcomingEvents';
import Donate from './pages/Donate/Donate';
import emailjs from 'emailjs-com';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFF6GV7c9X-7u0l1CyvoUB20KRZkL23xU",
  authDomain: "revennt-e5965.firebaseapp.com",
  projectId: "revennt-e5965",
  storageBucket: "revennt-e5965.firebasestorage.app",
  messagingSenderId: "263001763030",
  appId: "1:263001763030:web:ead98b767a51ee94f66d77",
  measurementId: "G-LM3KFFWJ3J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
