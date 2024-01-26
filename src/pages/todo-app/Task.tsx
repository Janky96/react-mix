import { Box, Checkbox, Stack, Typography } from '@mui/material';
import { PanoramaFishEye, TaskAlt, DeleteForever } from '@mui/icons-material';
import { useState } from 'react';

interface Prop {
  deleteTask: (taskName: string) => void;
  taskName: string;
}

const Task = ({ deleteTask, taskName }: Prop) => {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    deleteTask(taskName);
  }

  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Stack direction={'row'} alignItems={'center'}>
        <Checkbox
          icon={<PanoramaFishEye sx={{ color: '#a21caf' }} />}
          checkedIcon={<TaskAlt sx={{ color: '#a21caf' }} />}
        />
        <Typography>{taskName}</Typography>
      </Stack>
      <DeleteForever
        sx={{ '&:hover': { cursor: 'pointer' } }}
        onClick={handleDeleteTask}
      />
    </Stack>
  );
};

export default Task;
