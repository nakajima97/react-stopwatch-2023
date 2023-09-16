import { useState } from 'react';
import { Typography, Button, Container, Box } from '@mui/material';

const App = (): JSX.Element => {
  const [isRunningStopwatch, setIsRunningStopwatch] = useState(false);

  const handleStartStopwatch = () => {
    setIsRunningStopwatch(true);
  };

  const handlePauseStopwatch = () => {
    setIsRunningStopwatch(false);
  };

  return (
    <>
      <Container>
        <Box>
          <Typography>00:00:00</Typography>
        </Box>
        {isRunningStopwatch ? (
          <Button
            variant="contained"
            onClick={() => {
              handlePauseStopwatch();
            }}
          >
            Stop
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => {
              handleStartStopwatch();
            }}
          >
            Start
          </Button>
        )}
      </Container>
    </>
  );
};

export default App;
