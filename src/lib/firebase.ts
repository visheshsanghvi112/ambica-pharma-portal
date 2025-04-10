
// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

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

// Initialize Firestore
export const db = getFirestore(app);

// Helper function to log events
export const logAnalyticsEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

// Helper function to store contact form submissions
export const submitContactForm = async (formData: any) => {
  try {
    const docRef = await addDoc(collection(db, "contactSubmissions"), {
      ...formData,
      timestamp: serverTimestamp(),
      userCookies: getCookiesForStorage(),
    });
    console.log("Contact form submitted with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form: ", error);
    return { success: false, error };
  }
};

// Helper function to store career applications
export const submitCareerApplication = async (formData: any) => {
  try {
    const docRef = await addDoc(collection(db, "careerApplications"), {
      ...formData,
      timestamp: serverTimestamp(),
      userCookies: getCookiesForStorage(),
    });
    console.log("Career application submitted with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting career application: ", error);
    return { success: false, error };
  }
};

// Helper function to get cookies for storage
const getCookiesForStorage = () => {
  if (typeof window === 'undefined') return {};
  
  // Get relevant cookies from local storage
  const consentKey = "ambica_cookie_consent";
  const storedConsent = localStorage.getItem(consentKey);
  
  // Get other relevant browser information
  const userAgent = navigator.userAgent;
  const language = navigator.language;
  const screenSize = {
    width: window.screen.width,
    height: window.screen.height
  };
  
  return {
    consentSettings: storedConsent ? JSON.parse(storedConsent) : null,
    userAgent,
    language,
    screenSize,
    referrer: document.referrer,
    visitTimestamp: new Date().toISOString(),
  };
};

export default app;
