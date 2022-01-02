import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Resource } from '@watheia/mfe.model';
import { getUrl } from '@watheia/mfe.util';
import { Link } from '@watheia/ui-atoms';
import * as React from 'react';

interface SidebarProps {
  archives: ReadonlyArray<Resource>;
  description: string;
  social: ReadonlyArray<Resource>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: (t) =>
            t.palette.mode === 'dark' ? t.palette.grey[900] : t.palette.grey[50],
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={getUrl(archive.url).href}
          key={archive.label}
        >
          {archive.label}
        </Link>
      ))}
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.label} sx={{ mb: 0.5 }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.label}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
