import { AppBar, Box, Toolbar, Typography, styled, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import React, { useState } from 'react';
import { grey } from '@mui/material/colors';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
    });

    const Search = styled('div')(({ theme }) => ({
        backgroundColor: 'white',
        color: 'grey',
        padding: '0 10px',
        borderRadius: theme.shape.borderRadius,
        width: '40%',
    }));

    const Icons = styled(Box)(({ theme }) => ({
        display: 'none',
        alignItems: 'center',
        gap: '20px',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    }));

    const UserBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }));

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    REACT MUI
                </Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search>
                    <InputBase placeholder="Search..." />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={e => setOpen(true)}
                    ></Avatar>
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    ></Avatar>
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
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
