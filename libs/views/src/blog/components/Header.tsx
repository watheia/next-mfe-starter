import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from '@waweb/atoms';
import { Resource } from '@waweb/model';
import { getUrl } from '@waweb/utils';

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
          href={getUrl('blog', it.url)}
          sx={{ p: 1, flexShrink: 0 }}
        >
          {it.label}
        </Link>
      ))}
    </Toolbar>
  );
}
