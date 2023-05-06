import { Box, Container, Typography } from '@mui/material';

const About = () => (
  <>
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
  </>
);

export default About;
