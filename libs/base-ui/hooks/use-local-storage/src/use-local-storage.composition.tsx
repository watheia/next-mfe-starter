import React from 'react';
import { useLocalStorage } from './use-local-storage';

export const BasicuseLocalStorage = () => {
  const [value, setValue] = useLocalStorage(
    'watheia.base-ui/hooks/use-local-storage',
    'Hello, World!'
  );

  return (
    <>
      <h1>Current Value: {value}</h1>
      <input onChange={(e) => setValue(e.currentTarget.value)} value={value} />
    </>
  );
};
