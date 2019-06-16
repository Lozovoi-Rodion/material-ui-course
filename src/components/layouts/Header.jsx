import React from 'react';
import {AppBar, Typography, Toolbar} from "@material-ui/core";
import CreateDialog from '../Exercises/Dialog'

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" color="inherit" style={{flex: 1}}>
                    Exercise Database
                </Typography>
                <CreateDialog/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;