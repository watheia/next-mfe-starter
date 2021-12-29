import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box, { BoxProps } from '@mui/material/Box';
import { Resource } from '@waweb/model';
import { getUrl } from '@waweb/utils';
import { useRouter } from 'next/router';

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      //squash default tab action for link nav
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabNavProps extends BoxProps {
  routes: Resource[];
}

const TabNav = ({ sx, routes, ...props }: TabNavProps) => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const styles = { maxWidth: 'sm', ...sx };
  return (
    <Box sx={styles} {...props}>
      <Tabs variant="scrollable" scrollButtons="auto" aria-label="primary navigation">
        {routes.map((route, i) => (
          <LinkTab key={i} href={getUrl(route.url)} label={route.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabNav;
