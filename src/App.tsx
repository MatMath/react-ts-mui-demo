import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Content } from './Content';

import './PlainCss.css';
interface FooterComponentProps {
  linkName: string
}
const FooterComponent = ({ linkName }: FooterComponentProps): JSX.Element => {
  return (
    <Typography className='footerItem' variant="body2" color="text.secondary" align="center">
      This is a footer
      <Link className='footerItem' color="inherit" href="https://mui.com/">
        {linkName}
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Create React App example with TypeScript
            </Typography>
            <Content />
            <FooterComponent linkName={'Link to your website'} />
          </Box>
        </Container>
      </StyledEngineProvider>
  );
}