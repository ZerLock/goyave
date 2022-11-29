import { initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import rules from "./rules";
import type { Game, GlobalConfig } from "../models";
import { GAMES, CONFIGS, GLOBAL } from "./consts";

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
  createRoom: async function (data: Partial<Game>): Promise<Game["id"]> {
    const id = await rules.getId(); // Get a new ID
    const ref = doc(app, `${GAMES}/${id}`);
    await setDoc(ref, data);

    return id;
  },

  setDoc: async function (path: string, data: any): Promise<void> {
    const ref = doc(app, path);
    await setDoc(ref, data);
  },

  setGlobalConfig: async function (data: Partial<GlobalConfig>): Promise<void> {
    const ref = doc(app, `${CONFIGS}/${GLOBAL}`);
    await setDoc(ref, data);
  },

  updateRoom: async function (id: string, data: Partial<Game>): Promise<void> {
    const ref = doc(app, `${GAMES}/${id}`);
    await updateDoc(ref, data);
  },

  getDoc: async function (path: string): Promise<any> {
    const ref = doc(app, path);
    const snap = await getDoc(ref);

    return snap.exists() ? snap.data() : null;
  },

  getGlobalConfig: async function (): Promise<GlobalConfig> {
    const ref = doc(app, `${CONFIGS}/${GLOBAL}`);
    const snap = await getDoc(ref);

    const defaultConfig: GlobalConfig = {
      start_cards_number: 7,
      turn_timeout: 60, // seconds
    };

    return snap.exists() ? (snap.data() as GlobalConfig) : defaultConfig;
  },

  getRoom: async function (id: string): Promise<Game | null> {
    const ref = doc(app, `${GAMES}/${id}`);
    const snap = await getDoc(ref);

    return snap.exists() ? (snap.data() as Game) : null;
  },
};

export default db;
