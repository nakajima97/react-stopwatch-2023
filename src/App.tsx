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

  const formatTimer = (time: number) => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - hour * 3600) / 60);
    const second = time % 60;

    const formattedHours = String(hour).padStart(2, '0');
    const formattedMinute = String(minute).padStart(2, '0');
    const formattedSecond = String(second).padStart(2, '0');

    return `${formattedHours}:${formattedMinute}:${formattedSecond}`;
  };

  return (
    <>
      <Container>
        <Box>
          <Typography>{formatTimer(time)}</Typography>
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
              {time === 0 ? 'Start' : 'Restart'}
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
