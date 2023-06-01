// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore/lite";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGmVpNweR8SKh37DmxkxjyNNLYJs-OSa4",
  authDomain: "van-life-ea160.firebaseapp.com",
  projectId: "van-life-ea160",
  storageBucket: "van-life-ea160.appspot.com",
  messagingSenderId: "258109991908",
  appId: "1:258109991908:web:5c428d0d1810984aecf5f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

const getVans = async () => {
  try {
    const vanCollectionSnapshot = await getDocs(vansCollectionRef);
    const dataArray = vanCollectionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));

    // if (!response.ok) {
    //   throw {
    //     message: "Failed to fetch vans",
    //     statusText: response.statusText,
    //     status: response.status
    //   };
    // }

    return dataArray;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getVan = async (id) => {
  try {
    const docRef = doc(db, "vans", id);
    const docSnapshot = await getDoc(docRef);

    return {
      ...docSnapshot.data(),
      id: docSnapshot.id
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getHostVans = async () => {
  try {
    const filterQuery = query(vansCollectionRef, where("hostId", "==", "123"));
    const vanCollectionSnapshot = await getDocs(filterQuery);
    const dataArray = vanCollectionSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));

    // if (!response.ok) {
    //   throw {
    //     message: "Failed to fetch vans",
    //     statusText: response.statusText,
    //     status: response.status
    //   };
    // }

    return dataArray;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const loginUser = async (creds) => {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(creds)
  });

  const data = await response.json();

  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status
    };
  }

  return data;
};

export { getVans, getVan, getHostVans, loginUser };
