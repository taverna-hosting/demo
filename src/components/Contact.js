import { Box, Container, Typography } from '@mui/material';

const Contact = () => (
  <>
    <div id="contact" style={{ position: 'relative', top: '-64px' }}></div>
    <section id="contact">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1">
            123 Main Street, Anytown, USA
          </Typography>
          <Typography variant="body1">
            Phone: (555) 123-4567
          </Typography>
          <Typography variant="body1">
            Email: info@restaurant-name.com
          </Typography>
        </Box>
      </Container>
    </section>
  </>
);

export default Contact;
