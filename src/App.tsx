import { Typography, Button, Container, Box } from '@mui/material';

const App = (): JSX.Element => {
  return (
    <>
      <Container>
        <Box>
          <Typography>00:00:00</Typography>
        </Box>
        <Button variant="contained">Start</Button>
      </Container>
    </>
  );
};

export default App;
