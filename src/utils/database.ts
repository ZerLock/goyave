import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: process.env.NEXT_PUBLIC_measurementId,
};

const app = getFirestore(initializeApp(firebaseConfig));

const db = {
  setDoc: async function (path: string, data: any): Promise<void> {
    const ref = doc(app, path);
    await setDoc(ref, data);
  },

  getDoc: async function (path: string): Promise<any> {
    const ref = doc(app, path);
    const snap = await getDoc(ref);

    return snap.exists() ? snap.data() : null;
  },
};

export default db;
