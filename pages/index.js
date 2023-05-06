import Footer from '../src/components/Footer';
import Header from '../src/components/Header';

import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
  Box,
  Button
} from '@mui/material';

export default function Home() {
  return (
    <div>
      <Header />
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
      <div id="menus" style={{ position: 'relative', top: '-64px' }}></div>
      <section id="menus">
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', padding: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Menus
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 2,
              }}
            >
              <Card>
                <CardActionArea href="/path/to/lunch-menu.pdf" target="_blank">
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Lunch Menu
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Discover our delicious lunch options, including salads, sandwiches, and more.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card>
                <CardActionArea href="/path/to/dinner-menu.pdf" target="_blank">
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Dinner Menu
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Explore our exquisite dinner selection, featuring a variety of entrees, sides, and desserts.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Box>
        </Container>
      </section>
      <div id="about" style={{ position: 'relative', top: '-64px' }}></div>
      <section id="about">
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', padding: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              About
            </Typography>
            <Typography variant="body1">
              We are a family-owned restaurant offering the finest selection of dishes inspired by our rich culinary heritage. Our ingredients are locally sourced, and our recipes have been passed down through generations, resulting in an unforgettable dining experience. Join us for a meal, and let us share our passion for food with you.
            </Typography>
          </Box>
        </Container>
      </section>
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
      <Footer />
    </div>
  );
}
