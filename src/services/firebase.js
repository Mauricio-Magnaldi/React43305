//Firebase
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
//  addDoc,
//  setDoc,
//  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKJVPBR6hVRRWXMlVWkzQUm515CN_IMko",
  authDomain: "react-ecommerce2907.firebaseapp.com",
  projectId: "react-ecommerce2907",
  storageBucket: "react-ecommerce2907.appspot.com",
  messagingSenderId: "406941704215",
  appId: "1:406941704215:web:041e7e45dee245a8763c52",
  measurementId: "G-9WNSVWSMS5"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData() {
const productosRef = collection(db, "productos");
const documentsSnapshot = await getDocs(productosRef);
const documents = documentsSnapshot.docs;
const docsData = documents.map((item) => { return { ...item.data(), id: item.id}; 
  });
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "productos", id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getCategoryData(categoryURL) {
  const productosRef = collection(db, "productos");
  const q = query(productosRef, where("categoria","==",categoryURL));
  const documentsSnapshot = await getDocs(q);
  const documents = documentsSnapshot.docs;
  return documents.map((item) => ({ ...item.data(), id: item.id }));
}



/*

async function createOrder(orderData) {
  const collectionRef = collection(db, "orders");
  const docCreated = await addDoc(collectionRef, orderData);
  return(docCreated.id);
}
*/

/*
async function getOrder(id) {
  const docRef = doc(db, "orders", id);
  const docSnapshot = await addDoc(docRef);
  if(docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id};
}
}
*/


// export { getData, getProductData, getCategoryData, createOrder };
export { getData, getProductData, getCategoryData};