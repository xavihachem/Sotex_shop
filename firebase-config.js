// Firebase configuration and initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, serverTimestamp, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBQO8Kom8xrf-1NJaqFfro-mC1Scylzsuw",
    authDomain: "sotex-7cff7.firebaseapp.com",
    projectId: "sotex-7cff7",
    storageBucket: "sotex-7cff7.firebasestorage.app",
    messagingSenderId: "833675197768",
    appId: "1:833675197768:web:bbdf3b5583b17d9beb077d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other scripts
export { 
    auth, 
    db, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
    collection, 
    addDoc, 
    getDocs, 
    query, 
    orderBy, 
    serverTimestamp,
    doc,
    deleteDoc
};
