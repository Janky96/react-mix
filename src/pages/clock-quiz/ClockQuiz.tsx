import {
  Cancel as CancelIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './ClockQuiz.module.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ClockQuiz = () => {
  const [hourHandAngle, setHourHandAngle] = useState(0);
  const [minuteHandAngle, setMinuteHandAngle] = useState(0);
  const [secondHandAngle, setSecondHandAngle] = useState(0);
  const [displayedHour, setDisplayedHour] = useState<string>('');
  const [inputHour, setInputHour] = useState<string>('');
  const [correctMatch, setCorrectMatch] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    randomTime();
  }, []);
  useEffect(() => {
    setInputHour('');
  }, [displayedHour]);

  function continuousTime() {
    setInterval(() => {
      let d = new Date(); //object of date()

      setTimeFromDate(d);
    }, 1000);
  }

  function setTimeFromDate(date: Date) {
    const hr: number = date.getHours();
    const min: number = date.getMinutes();
    const sec: number = date.getSeconds();
    const hrRotation = 30 * hr + min / 2; //converting current time
    const minRotation = 6 * min;
    const secRotation = 6 * sec;

    setHourHandAngle(hrRotation);
    setMinuteHandAngle(minRotation);
    setSecondHandAngle(secRotation);
  }

  /* ----- Check time functions----- */
  function checkTime(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    handleOpen();
    if (inputHour.replace(':', '') === displayedHour) {
      setCorrectMatch(true);
      setTimeout(() => {
        console.log('Delayed for 1 second.');
        handleClose();
      }, 300);
      randomTime();
    } else {
      setCorrectMatch(false);
    }
  }

  /* ----- Random functions----- */
  function randomTime() {
    let d = new Date();
    const randomHour = getRandomHour();
    const randomMinute = getRandomMinute();
    d.setHours(randomHour);
    d.setMinutes(randomMinute);

    setTimeFromDate(d);
    let randomMinuteString = randomMinute.toString();
    if (randomMinuteString.length === 1) {
      randomMinuteString = '0' + randomMinuteString;
    }
    setDisplayedHour(randomHour.toString() + randomMinuteString);
  }

  function getRandomHour(): number {
    return getRandomInt(13);
  }

  function getRandomMinute(): number {
    return getRandomInt(61);
  }

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  /* ----- Modal functions----- */
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={styles['clock-container']}>
        <div
          className={[styles['needle'], styles['hour']].join(' ')}
          style={{ transform: `rotate(${hourHandAngle}deg)` }}
        ></div>
        <div
          className={[styles['needle'], styles['minute']].join(' ')}
          style={{ transform: `rotate(${minuteHandAngle}deg)` }}
        ></div>
        <div
          className={[styles['needle'], styles['second']].join(' ')}
          style={{ transform: `rotate(${secondHandAngle}deg)` }}
        ></div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        <form
          onSubmit={(event) => {
            checkTime(event);
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '20px',
            }}
          >
            {' '}
            <TextField
              value={inputHour}
              id="standard-basic"
              label="Value time"
              variant="standard"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInputHour(event.target.value);
                console.log(inputHour);
              }}
            />
            <Button variant="contained" type="submit">
              Check Time
            </Button>
          </div>
        </form>
        <Button
          variant="contained"
          sx={{ marginTop: '20px' }}
          onClick={randomTime}
        >
          Random
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                {correctMatch ? (
                  <>
                    <CheckIcon sx={{ color: '#37b24d' }} />
                    CORRECT{' '}
                  </>
                ) : (
                  <>
                    <CancelIcon sx={{ color: '#c92a2a' }} />
                    WRONG
                  </>
                )}
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ClockQuiz;
