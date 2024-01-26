import { Box, Button, Stack, styled } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const SocialMedia = () => {
  return (
    <>
      <Box>
        <Navbar />
        <Stack direction="row" spacing={2}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </>
  );
};

export default SocialMedia;
