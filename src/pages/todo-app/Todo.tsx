import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import Task from './Task';
import { useState } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>(['Buy milk', 'Journal']);
  const [newTask, setNewTask] = useState<string>('');

  function deleteTask(taskName: string) {
    setTasks(tasks.filter((task) => task !== taskName));
  }

  function handleTextChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewTask(event.currentTarget.value);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Stack sx={{ width: '600px', height: '500px' }}>
        <Typography variant="h3" fontWeight={500}>
          Ciao a tutti
        </Typography>
        {tasks.map((task, idx) => (
          <Task
            deleteTask={(taskName) => deleteTask(taskName)}
            key={idx + task}
            taskName={task}
          />
        ))}
        <Stack
          direction="row"
          justifyContent={'center'}
          alignItems={'center'}
          gap={4}
        >
          <TextField
            id="standard-basic"
            label="Standard"
            variant="standard"
            onChange={(event) => {
              handleTextChange(event);
            }}
          />
          <Button
            variant="contained"
            onClick={(event) => {
              setTasks([newTask, ...tasks]);
            }}
            sx={{ background: 'red' }}
          >
            Aggiungi Task
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Todo;
