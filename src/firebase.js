import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_API_ID,
};

// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  const result = await signInWithPopup(auth, provider);
  return result;
};

export { auth, googleSignIn };
export default db;
