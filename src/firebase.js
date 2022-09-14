import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBH1BTyPVrUK8ilb0s_cdbfKPrzioET2Sk",
  authDomain: "linkedin-clone-bee73.firebaseapp.com",
  projectId: "linkedin-clone-bee73",
  storageBucket: "linkedin-clone-bee73.appspot.com",
  messagingSenderId: "974836826746",
  appId: "1:974836826746:web:4dcd8077234cd10dc5b1c3"
};

initializeApp(firebaseConfig)

export const db = getFirestore()