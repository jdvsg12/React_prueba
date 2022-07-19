
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// import { products } from '../utils/products';


const firebaseConfig = {
  apiKey: "AIzaSyBY4BInYWgWnBK_ulzFkkFSRl6m0aVRDX4",
  authDomain: "ecomerce-velandia.firebaseapp.com",
  projectId: "ecomerce-velandia",
  storageBucket: "ecomerce-velandia.appspot.com",
  messagingSenderId: "203130983258",
  appId: "1:203130983258:web:34ae18a6a88bfe6b355963",
  measurementId: "G-DF2HNQ419R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

// const collectionProducts = collection(db, "products")


// products.map((prod) => addDoc(collectionProducts, prod))