import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuth, url } from '@watheia/mfe.api';
import { fixtures } from '@watheia/mfe.model';
import { Link } from '@watheia/ui-atoms';
import { TabNav } from '@watheia/ui-organisms';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';

/* eslint-disable-next-line */
export interface AppBarProps {}

export function AppBar(props: AppBarProps) {
  const { session, signOut } = useAuth();
  const router = useRouter();

  const signoutHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signOut().then(() => router.push('/'));
  };

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
          <Link variant="inherit" color="text.primary" href={url().href} underline="hover">
            waweb
          </Link>
        </Typography>
        {session && (
          <>
            <TabNav items={fixtures.primaryNav} />
            <Button
              onClick={signoutHandler}
              variant="text"
              color="inherit"
              sx={{ my: 1, mx: 1.5 }}
            >
              Logout
            </Button>{' '}
          </>
        )}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
