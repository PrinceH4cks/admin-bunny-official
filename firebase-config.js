import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBr2sv7bducDh3A8kkBwBJIrD5f9aEDeco",
    authDomain: "bunny-panel.firebaseapp.com",
    databaseURL: "https://bunny-panel-default-rtdb.firebaseio.com",
    projectId: "bunny-panel",
    storageBucket: "bunny-panel.firebasestorage.app",
    messagingSenderId: "693213619146",
    appId: "1:693213619146:web:575b08d636e3ed9e1ea533",
    measurementId: "G-N9KDNM0FKK"
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
    analytics = getAnalytics(app);
} catch (e) {
    analytics = null;
}

const db = getDatabase(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
