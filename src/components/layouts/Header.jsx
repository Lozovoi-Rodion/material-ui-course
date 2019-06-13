import React from 'react';
import {AppBar, Typography,  Toolbar} from "@material-ui/core";

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit">
                    Exercise Database
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;