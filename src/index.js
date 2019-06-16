import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {cyan, blueGrey} from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette:{
        primary: cyan,
        secondary:{
            main: blueGrey[500],
            light: blueGrey[200],
            dark: blueGrey[700]
        },
        type: "light",
        spacing:{
            unit: 10
        }
    }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App/>
    </MuiThemeProvider>
    , document.getElementById('root'));
