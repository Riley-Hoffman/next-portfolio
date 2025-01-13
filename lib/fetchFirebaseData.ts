import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, Database } from 'firebase/database'

let db: Database
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig)
db = getDatabase(app)

export async function fetchFirebaseData<T>(path: string): Promise<T[]> {
  try {
    const snapshot = await get(ref(db, path))
    return snapshot.exists() ? snapshot.val() : []
  } catch (error) {
    console.error(`Error fetching data from path "${path}":`, error)
    return []
  }
}
