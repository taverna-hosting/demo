import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Container,
	Typography,
} from '@mui/material';

const Menus = () => (
	<>
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
	</>
);

export default Menus;