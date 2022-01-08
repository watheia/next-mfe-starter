import Box, { BoxProps } from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Resource } from '@watheia/mfe.model';
import { url } from '@watheia/mfe.api';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Link from 'next/link';

interface LinkTabProps {
  label: string;
  href: string;
}

function LinkTab({ label, href }: LinkTabProps) {
  return (
    <Link href={url(href).href} passHref>
      <Tab component="a" label={label} value={href} />
    </Link>
  );
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabNavProps extends BoxProps {
  items: Resource[];
}

const TabNav = ({ sx, items, ...props }: TabNavProps) => {
  const router = useRouter();
  const src = url(router?.basePath ?? '');
  const selectedIndex = items.findIndex((it) => src.href.endsWith(it.url));
  // default to the first tab (presumably the main home)
  const [value, setValue] = useState<number>(Math.max(0, selectedIndex));
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const styles = { maxWidth: 'sm', ...sx };
  return (
    <Box sx={styles} {...props}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="primary navigation"
        value={value}
        onChange={handleChange}
      >
        {items.map((it, i) => (
          <LinkTab key={it.url} href={it.url} label={it.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabNav;
