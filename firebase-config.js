// firebase-config.js - Firebase ko initialize karne ke liye
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // <-- Apni API Key yahan dalein
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id", // <-- Apna Project ID yahan dalein
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "123456789",
    appId: "your-app-id"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Global database variable
const db = firebase.firestore();