import {
    addDoc,
    collection,
    getFirestore,
  } from "firebase/firestore";
  // This is tree shaking from firestore
  
  import { AddMeteoriteType } from "../types/meteorite";
  import { app } from "../lib/firebase";
  
  export const firestore = getFirestore(app);
  
  // HOTELS COLLECTION
  export const meteoriteCollection = collection(firestore, "Meteorites");
  
  // ADD A NEW DOCUMENT TO YOUR COLLECTION
  export const addMeteorite = async (meteoriteData: AddMeteoriteType) => {
    const newMeteorite = await addDoc(meteoriteCollection, { ...meteoriteData });
    console.log(`The new meteorite was created at ${newMeteorite.path}`);
  };
  