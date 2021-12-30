import { createContext, useContext } from 'react';
import { WaAuthContext } from '../types/WaAuthContext';

export const AuthContext = createContext<WaAuthContext | null>(null);

export const useAuth = (): WaAuthContext => {
  const ctx = useContext(AuthContext);
  if (ctx === null) {
    throw new Error(`useAuth must be used within an AuthProvider.`);
  }

  return ctx;
};
