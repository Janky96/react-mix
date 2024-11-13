import { Button, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Box className={'align-body'} sx={{ display: 'flex', gap: '15px' }}>
        <NavLink to="/character-counter">
          <Button variant="contained">Character Counter</Button>
        </NavLink>
        <NavLink to="/calculator">
          <Button variant="contained">Calculator</Button>
        </NavLink>
        <NavLink to="/todo-app">
          <Button variant="contained">Todo App</Button>
        </NavLink>
        <NavLink to="/pricing">
          <Button variant="contained">Pricing</Button>
        </NavLink>
        <NavLink to="/social-media">
          <Button variant="contained">Social Media</Button>
        </NavLink>
        <NavLink to="/clock-quiz">
          <Button variant="contained">Clock Quiz</Button>
        </NavLink>
        <NavLink to="/bottle-order">
          <Button variant="contained">Bottle Order</Button>
        </NavLink>
      </Box>
    </>
  );
};

export default Home;
