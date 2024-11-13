import { BatteryVerticalFull } from '@phosphor-icons/react';
import styles from './BottleOrder.module.css';
import { useEffect, useState } from 'react';
import { Button, Box, Snackbar, SnackbarContent } from '@mui/material';

const colors = [
  '#e03131',
  '#be4bdb',
  '#9775fa',
  '#1971c2',
  '#0ca678',
  '#f76707',
  '#ffd43b',
];

function shuffle(array: string[]): string[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

const answerArrayColors = shuffle(colors);

const BottleOrder = () => {
  const [colorSelected, setColorSelected] = useState<number | null>(null);
  const [arrayColors, setArrayColors] = useState(shuffle(colors));
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    console.log(answerArrayColors);
  }, arrayColors);

  let messageToShow = '';
  let numberOfRights: number = 0;
  for (let i = 0; i < arrayColors.length; i++) {
    if (arrayColors[i] === answerArrayColors[i]) {
      numberOfRights++;
    }
  }
  if (numberOfRights === answerArrayColors.length) {
    messageToShow = 'You won!';
  } else {
    messageToShow = `You got ${numberOfRights} rights`;
  }

  function handleBottleClick(index: number) {
    if (colorSelected === null) {
      setColorSelected(index);
    } else {
      const tmp = arrayColors[colorSelected];
      let newArrayColors = [...arrayColors];
      newArrayColors[colorSelected] = newArrayColors[index];
      newArrayColors[index] = tmp;
      setArrayColors(newArrayColors);
      setColorSelected(null);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles['bottles-container']}>
        {arrayColors.map((color, idx) => (
          <BatteryVerticalFull
            size={140}
            fill={color}
            weight="fill"
            onClick={() => handleBottleClick(idx)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      <Button variant="contained" onClick={() => setShowSnackbar(true)}>
        Check rights
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSnackbar}
        onClose={() => setShowSnackbar(false)}
        message={messageToShow}
        key={'top center'}
      />
    </div>
  );
};

export default BottleOrder;
