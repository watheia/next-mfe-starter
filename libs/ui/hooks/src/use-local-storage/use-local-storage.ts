import { useState } from 'react';

export type UseLocalStorage<T> = readonly [T, (value: T | ((val: T) => T)) => void];

export function useLocalStorage<T>(key: string, initialValue: T): UseLocalStorage<T> {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window === 'undefined')
        throw new Error(
          "localStorage cannot be accessed during SSR, try guarding with ` if(typeof window !== 'undefined')`"
        );

      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      // console.error(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      // console.error(error);
    }
  };
  return [storedValue, setValue] as const;
}
