import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../lib/firebaseConfig'; // Your Firebase config

export function useFetchFirebaseData<T>(path: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const dbRef = ref(db, path);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        setData(snapshot.val());
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, [path]);

  return { data, loading, error };
}
