import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: 'primary.main', padding: 2 }}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color="text.secondary">
          &copy; {new Date().getFullYear()} Taverna. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
