import {
    getFirestore,
    setDoc,
    doc,
    getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../goyave-credentials.json';

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
