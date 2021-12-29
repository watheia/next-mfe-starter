import styled from '@emotion/styled';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

/* eslint-disable-next-line */
export interface HeaderProps {
  title?: string;
  subTitle?: string;
}

type TextProps = { text: string };

const Title = styled.div`
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1;
`;

const SubTitle = styled.div`
  display: block;
  font-size: 1.875rem;
  font-weight: 300;
  line-height: 2.25rem;
  margin-bottom: 0.5rem;
`;

// const Title = (props: TextProps) => (
//   <Typography component="h1" variant="h2" color="text.primary" gutterBottom>
//     {props.text}
//   </Typography>
// );

// const SubTitle = (props: TextProps) => (
//   <Typography variant="h5" color="text.secondary" component="p">
//     {props.text}
//   </Typography>
// );

export function Header({ title, subTitle }: HeaderProps) {
  if (!title && !subTitle) return null;

  return (
    <Container disableGutters maxWidth="md" component="header" sx={{ mt: 2 }}>
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </Container>
  );
}

export default Header;
