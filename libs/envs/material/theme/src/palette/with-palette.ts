import { PaletteMode } from '@mui/material';
import dark from './dark';
import light from './light';

export const withPalette = (mode: PaletteMode) => {
  return mode === 'light' ? light : dark;
};
