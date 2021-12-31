import { Button } from '@watheia/mfe.ui.atoms.button';
import React, { useEffect, useState } from 'react';

export function ThemeToggler() {
  const [theme, setTheme] = useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  useEffect(() => {
    document.body.dataset['theme'] = theme;
  }, [theme]);
  return (
    <Button onClick={() => setTheme(nextTheme)} secondary>
      {`${nextTheme} mode`}
    </Button>
  );
}
