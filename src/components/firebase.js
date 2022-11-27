import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query,where, addDoc, doc, getDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCwzNOpHvveFNlC4kmdpzG219Lcw3qFVu8",
  authDomain: "urban-collection.firebaseapp.com",
  projectId: "urban-collection",
  storageBucket: "urban-collection.appspot.com",
  messagingSenderId: "606690544676",
  appId: "1:606690544676:web:bc7cf5c2ed2a3f88811cb1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function getCollectionWithName(collectionName){
  return collection(db, collectionName)
}

export function createCustomerOrder(order){
  
  const collection = getCollectionWithName("orders")
  return addDoc( collection, order)

}

export function getProductWithId(itemId){
  
  const collection = getCollectionWithName("products")
  const reference = doc(collection, itemId)
  return getDoc(reference)

}

export function getAllProducts(){
  const collection = getCollectionWithName("products")
  return getDocs(collection)
}

export function getProductsWithCategory(category){
  
  const collection = getCollectionWithName("products")
  const categoryQuery = query(collection, where("category","==",category))
  return getDocs(categoryQuery)

}