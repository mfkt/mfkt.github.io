// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzUi8rcfJDkONoJWXiJCXNy0cRb52wIaI",
  authDomain: "portfolio-61a08.firebaseapp.com",
  projectId: "portfolio-61a08",
  storageBucket: "portfolio-61a08.appspot.com",
  messagingSenderId: "965717128937",
  appId: "1:965717128937:web:94b153dfe8cebfb08e6278",
  measurementId: "G-434HQCZQVZ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getLanguages() {
  const languagesCol = collection(db, 'languages')
  const snapshot = await getDocs(languagesCol)
  const languageList = snapshot.docs.map(doc => doc.data())
  return languageList
}

async function getProgrammings() {
  const programmingCol = collection(db, "programming")
  const snapshot = await getDocs(programmingCol)
  const programmingList = snapshot.docs.map(doc => doc.data())
  return programmingList
}

async function getTechnologies(languageId) {
  const technologiesCol = collection(db, `programming/${languageId}/technologies`)
  const snapshot = await getDocs(technologiesCol)
  const technologiesList = snapshot.docs.map(doc => doc.data())
  return technologiesList
}

// const analytics = getAnalytics(app);

export { getLanguages }
export { getProgrammings }
export { getTechnologies }