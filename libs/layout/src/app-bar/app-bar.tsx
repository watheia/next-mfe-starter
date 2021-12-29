import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@waweb/atoms';
import { TabNav } from '@waweb/organisms';
import { getUrl } from '@waweb/utils';
import { fixtures } from '@waweb/model';
import React from 'react';

/* eslint-disable-next-line */
export interface AppBarProps {}

export function AppBar(props: AppBarProps) {
  return (
    <MuiAppBar
      position="static"
      color="primary"
      elevation={0}
      sx={{
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Link variant="inherit" color="text.primary" href={getUrl()} underline="hover">
            waweb
          </Link>
        </Typography>
        <TabNav routes={fixtures.primaryNav} />
        <Button
          href={getUrl('/auth')}
          color="primary"
          variant="text"
          sx={{ my: 1, mx: 1.5 }}
        >
          Login
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
