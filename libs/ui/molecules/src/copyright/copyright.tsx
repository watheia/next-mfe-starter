import * as React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

export default function Copyright({ sx, ...props }: TypographyProps) {
  return (
    <Typography
      data-testid="waweb.molecules/copyright"
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: 5, ...sx }}
      {...props}
    >
      {'Copyright © '}
      <MuiLink color="inherit" href="https://www.watheia.io/">
        Watheia Labs, LLC
      </MuiLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
