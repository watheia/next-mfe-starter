import { PaletteMode, responsiveFontSizes, Theme } from '@mui/material';
import { createTheme as createMuiTheme } from '@mui/material/styles';
import { withPalette } from './palette';

/**
 * Create a theme instance using the desired color mode
 *
 * @param mode
 * @returns {Theme}
 */
export const withTheme = (mode: PaletteMode): Theme => {
  return responsiveFontSizes(
    createMuiTheme({
      palette: withPalette(mode),
    })
  );
};
