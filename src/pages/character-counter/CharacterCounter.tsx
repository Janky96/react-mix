import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import styles from "./CharacterCounter.module.css";

const CharacterCounter = () => {
  const [numberCharacters, setNumberCharacters] = useState<number>(0);

  return <>
    <Box sx={{ display: 'flex', flexDirection: 'column'}} className={styles["roboto-font"]}>
      <Typography variant="h3" component="h3">Character counter</Typography>
      <TextareaAutosize aria-label="minimum height" minRows={5} placeholder="Type here!"
        style={{ minWidth: '600px', padding: '10px', fontSize: '18px', fontFamily: 'Roboto'}}
        onChange={(e) => {
          setNumberCharacters(e.target.value.length);
        }}
      />
      <Typography variant="body1" component="span" sx={{ mt: '10px' }}>Characters typed: {numberCharacters}</Typography>
    </Box>
  </>
}

export default CharacterCounter;