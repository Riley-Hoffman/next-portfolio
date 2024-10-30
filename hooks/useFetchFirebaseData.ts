import { useState, useEffect } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../lib/firebaseConfig";

export const useFetchFirebaseData = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const dataRef = ref(db, path);

    const handleData = (snapshot: any) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setError("No data available");
      }
      setLoading(false);
    };

    const handleError = (error: any) => {
      setError(`Error fetching data: ${error.message}`);
      setLoading(false);
    };

    const unsubscribe = onValue(dataRef, handleData, handleError);

    return () => {
      off(dataRef);
      unsubscribe();
    };
  }, [path]);

  return { data, loading, error };
};
