import { PaletteMode, responsiveFontSizes, Theme } from '@mui/material';
import { createTheme as createMuiTheme } from '@mui/material/styles';
// import { NextLinkComposed } from './next-link-composed';
import palette from './palette';

/**
 * Create a theme instance using the desired color mode
 *
 * @param mode
 * @returns {Theme}
 */
export const createTheme = (mode: PaletteMode): Theme => {
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        mode,
        ...palette,
      },
    })
  );
};
