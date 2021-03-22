import firebase from 'firebase/app'

import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAAkxiOWSGH6pscjZrh9ENpuShhuGcrurg",
	authDomain: "explicador-courses.firebaseapp.com",
	projectId: "explicador-courses",
	storageBucket: "explicador-courses.appspot.com",
	messagingSenderId: "198083245838",
	appId: "1:198083245838:web:ffd0823837bf17f33c095f"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)

// ==== Firebase firestore db
export const db = firebaseApp.firestore();

db.enablePersistence() //activando o funcionamento offline

export const dbTest = db.collection("test");