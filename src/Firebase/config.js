// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ47uYmklGm5ICglo3VcshY06wg4FHeeI",
    authDomain: "levels-23.firebaseapp.com",
    projectId: "levels-23",
    storageBucket: "levels-23.appspot.com",
    messagingSenderId: "252192594097",
    appId: "1:252192594097:web:6e89c2ebd8fdc79a4dea90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database }