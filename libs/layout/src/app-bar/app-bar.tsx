import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@watheia/ui-atoms';
import { TabNav } from '@watheia/ui-organisms';
import { useAuth } from '@waweb/auth';
import { fixtures } from '@waweb/model';
import { getUrl } from '@waweb/utils';
import React from 'react';

/* eslint-disable-next-line */
export interface AppBarProps {}

const LoginButton = () => (
  <Button href={getUrl('/auth')} color="primary" variant="text" sx={{ my: 1, mx: 1.5 }}>
    Login
  </Button>
);

const LogoutButton = ({ onClick }: { onClick: () => any }) => (
  <Button onClick={onClick} variant="text" sx={{ my: 1, mx: 1.5 }}>
    Logout
  </Button>
);

export function AppBar(props: AppBarProps) {
  const auth = useAuth();
  return (
    <MuiAppBar
      position="static"
      color="transparent"
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
        {auth.userLoaded ? <LogoutButton onClick={auth.signOut} /> : <LoginButton />}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
