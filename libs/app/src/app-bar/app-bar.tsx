import MuiAppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { fetcher, usePrincipal } from '@watheia/mfe.api';
import { fixtures } from '@watheia/mfe.model';
import { getUrl } from '@watheia/mfe.util';
import { Link } from '@watheia/ui-atoms';
import { TabNav } from '@watheia/ui-organisms';
import { useRouter } from 'next/router';
import React, { MouseEvent } from 'react';

/* eslint-disable-next-line */
export interface AppBarProps {}

const LoginButton = () => (
  <Button href={getUrl('/auth')} color="primary" variant="text" sx={{ my: 1, mx: 1.5 }}>
    Login
  </Button>
);

const LogoutButton = ({
  onClick,
}: {
  onClick: (e: MouseEvent<HTMLButtonElement>) => Promise<void>;
}) => (
  <Button onClick={onClick} variant="text" sx={{ my: 1, mx: 1.5 }}>
    Logout
  </Button>
);

export function AppBar(props: AppBarProps) {
  const { user, mutateUser } = usePrincipal();
  const router = useRouter();

  const signoutHandler = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // TODO refactor into api
    mutateUser(await fetcher('/api/logout', { method: 'POST' }), false);
    router.push('/login');
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
          <Link variant="inherit" color="text.primary" href={getUrl()} underline="hover">
            waweb
          </Link>
        </Typography>
        <TabNav routes={fixtures.primaryNav} />
        {user?.isLoggedIn ? <LogoutButton onClick={signoutHandler} /> : <LoginButton />}
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
