import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDwM0ClGhMnHStWwWezF2M-DPS6qPffLVE",
  authDomain: "hagere-craft.firebaseapp.com",
  projectId: "hagere-craft",
  storageBucket: "hagere-craft.firebasestorage.app",
  messagingSenderId: "298447820547",
  appId: "1:298447820547:web:c600fcbc285ffb0da37b36",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const useDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(useDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(useDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error in creating the user", error.message);
    }
  }
  return useDocRef;
};
