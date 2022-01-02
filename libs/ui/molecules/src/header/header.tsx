import { Box, styled } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {
  title?: string;
  subTitle?: string;
}

type TextProps = { text: string };

const Title = styled('h1')(({ theme }) => ({
  fontSize: '3rem',
  fontWeight: 500,
  letterSpacing: '-0.025em',
  lineHeight: 1,
  color: theme.palette.text.primary,
}));

const SubTitle = styled('span')(({ theme }) => ({
  display: 'block',
  fontSize: '1.875rem',
  fontWeight: 300,
  lineHeight: '2.25rem',
  marginBottom: '0.5rem',
  color: theme.palette.text.secondary,
}));

export function Header({ title, subTitle }: HeaderProps) {
  if (!title && !subTitle) return null;

  return (
    <Box component="header" sx={{ mt: 2 }}>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      {title && <Title>{title}</Title>}
    </Box>
  );
}

export default Header;
