
// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABzex4h7_CTisn88w7nnNOCu-5sIzOB_c",
  authDomain: "ambica-786.firebaseapp.com",
  projectId: "ambica-786",
  storageBucket: "ambica-786.firebasestorage.app",
  messagingSenderId: "234223076946",
  appId: "1:234223076946:web:5b41b28fc67b093c61018b",
  measurementId: "G-2PZ7FVFDBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Helper function to log events
export const logAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

export default app;
