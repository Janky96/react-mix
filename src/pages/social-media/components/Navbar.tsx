import {
  Mail,
  Notifications,
  Pets,
  Search as SearchIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
  alignItems: 'center',
  display: 'flex',
}));

const IconsBox = styled(Box)(({ theme }) => ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const avatar = (
    <Avatar
      alt="Avatar image"
      src="src/assets/avatars/avatar-1.jpg"
      sx={{
        width: '30px',
        height: '30px',
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => setOpen(true)}
    />
  );

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          JKY DEV
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <SearchIcon color={'primary'} />
          <InputBase placeholder="Search" />
        </Search>
        <IconsBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          {avatar}
        </IconsBox>
        <UserBox>{avatar}</UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
