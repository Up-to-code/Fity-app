// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCvOQEAHjk_Um_TMyT6goc4dUdNPfJLD6k",
  authDomain: "fity-b394e.firebaseapp.com",
  projectId: "fity-b394e",
  storageBucket: "fity-b394e.appspot.com",
  messagingSenderId: "1023548552048",
  appId: "1:1023548552048:web:cb4879bf2c5356c4e295b5",
  measurementId: "G-FZET02B0EQ",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
