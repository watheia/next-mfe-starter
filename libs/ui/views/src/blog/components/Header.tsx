import Toolbar from '@mui/material/Toolbar';
import { Resource } from '@watheia/mfe.model';
import { url } from '@watheia/mfe.api';
import { Link } from '@watheia/ui-atoms';
import * as React from 'react';

interface HeaderProps {
  categories: ReadonlyArray<Resource>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { categories, title } = props;

  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
    >
      {categories.map((it) => (
        <Link
          color="inherit"
          noWrap
          key={it.label}
          variant="body2"
          href={url('blog', it.url).href}
          sx={{ p: 1, flexShrink: 0 }}
        >
          {it.label}
        </Link>
      ))}
    </Toolbar>
  );
}
