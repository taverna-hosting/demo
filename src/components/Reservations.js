import {
  Box,
  Button,
  Container,
  Typography
} from '@mui/material';

const Reservations = () => (
  <>
    <div id="reservations" style={{ position: 'relative', top: '-64px' }}></div>
    <section id="reservations">
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', padding: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Reservations
          </Typography>
          <Typography variant="body1">
            We use a third-party reservation system for your convenience. Click the button below to make a reservation.
          </Typography>
          <Box sx={{ paddingTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="https://www.example-reservation-system.com" // Replace with the actual reservation URL
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a Table
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  </>
);

export default Reservations;
