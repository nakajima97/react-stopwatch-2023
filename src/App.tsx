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
      </Container>
    </>
  );
};

export default App;
