import { db } from "./firebaseConfig";
import { ref, get } from "firebase/database";

export async function fetchFirebaseData<T>(path: string): Promise<T | null> {
  try {
    const snapshot = await get(ref(db, path));
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error(`Error fetching data from path "${path}":`, error);
    return null;
  }
}
