import { useEffect, useState } from 'react';
import { Typography, Button, Container, Box } from '@mui/material';

const App = (): JSX.Element => {
  const [isRunningStopwatch, setIsRunningStopwatch] = useState(false);
  const [time, setTime] = useState(0);

  const handleStartStopwatch = () => {
    setIsRunningStopwatch(true);
  };

  const handlePauseStopwatch = () => {
    setIsRunningStopwatch(false);
  };

  const handleClearTimer = () => {
    setTime(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (isRunningStopwatch) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunningStopwatch]);

  return (
    <>
      <Container>
        <Box>
          <Typography>{time}</Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          {isRunningStopwatch ? (
            <Button
              variant="contained"
              color="error"
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
          {time !== 0 && !isRunningStopwatch && (
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                handleClearTimer();
              }}
            >
              Clear
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
};

export default App;
