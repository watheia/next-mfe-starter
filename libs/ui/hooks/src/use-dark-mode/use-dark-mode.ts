import { useMediaQuery } from '@mui/material';
import { useLocalStorage } from '../use-local-storage';
import { useEffect } from 'react';

const darkClases = ['dark', 'dark-mode'];
const lightClases = ['light', 'light-mode'];

// export type UseDarkMode = (
//   | boolean
//   | ((value: boolean | ((val: boolean) => boolean)) => void)
// )[];

export type UseDarkMode = [boolean, (value: boolean | ((val: boolean) => boolean)) => void];
/**
 * Compose our useMedia hook to detect dark mode preference.
 * The API for useMedia looks a bit weird, but that's because ...
 * ... it was designed to support multiple media queries and return values.
 * Thanks to hook composition we can hide away that extra complexity!
 * Read the recipe for useMedia to learn more: usehooks.com/useMedia
 * @returns
 */
export function usePrefersDarkMode() {
  return useMediaQuery('(prefers-color-scheme: dark)');
}

export function useDarkMode(
  storageId = 'watheia.next-mfe-starter.dark-mode-enabled'
): UseDarkMode {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabled] = useLocalStorage<boolean>(storageId, false);
  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode();
  // If enabledState is defined use it, otherwise fallback to prefersDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = enabledState ?? prefersDarkMode;
  // Fire off effect that add/removes dark mode classes
  useEffect(
    () => {
      const element = window.document.body;
      for (let i = 0; i < 2; i++) {
        if (enabled) {
          element.classList.add(darkClases[i]);
          element.classList.remove(lightClases[i]);
        } else {
          element.classList.remove(darkClases[i]);
          element.classList.add(lightClases[i]);
        }
      }
    },
    [enabled] // Only re-call effect when value changes
  );
  // Return enabled state and setter
  return [enabled, setEnabled];
}
