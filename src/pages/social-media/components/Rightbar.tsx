import { Box, Typography } from '@mui/material';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Typography variant="h6" fontWeight={100}>
        Online friends
      </Typography>
    </Box>
  );
};

export default Rightbar;
