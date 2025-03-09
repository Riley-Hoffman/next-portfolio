'use server'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, get, Database } from 'firebase/database'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}

const app = initializeApp(firebaseConfig)
const db: Database = getDatabase(app)

type FetchFirebaseDataReturn<T> = Promise<T[]>

export const fetchFirebaseData = async <T>(
  path: string
): FetchFirebaseDataReturn<T> => {
  try {
    const snapshot = await get(ref(db, path))
    return snapshot.exists() ? snapshot.val() : []
  } catch (error) {
    console.error(`Error fetching data from path "${path}":`, error)
    return []
  }
}
