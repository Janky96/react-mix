import { Button } from '@mui/material';
import { MouseEvent } from 'react';

type Props = {
  value: number;
  clickHandler: (e: MouseEvent) => void;
};

const NumericButton = ({ value, clickHandler }: Props) => {
  return (
    <Button
      onClick={(e) => clickHandler(e)}
      size="large"
      sx={{ color: '#313638', fontSize: '32px' }}
    >
      {value}
    </Button>
  );
};

export default NumericButton;
