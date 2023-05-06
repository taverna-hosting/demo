import {
  Box,
  Container,
  Typography
} from '@mui/material';

const Hours = () => (
  <>
    <div id="hours" style={{ position: 'relative', top: '-64px' }}></div>
    <section id="hours">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Hours
          </Typography>
          <Typography variant="body1">
            Monday - Friday: 11:00 AM - 10:00 PM
          </Typography>
          <Typography variant="body1">
            Saturday: 10:00 AM - 11:00 PM
          </Typography>
          <Typography variant="body1">
            Sunday: 10:00 AM - 9:00 PM
          </Typography>
        </Box>
      </Container>
    </section>
  </>
);

export default Hours;
