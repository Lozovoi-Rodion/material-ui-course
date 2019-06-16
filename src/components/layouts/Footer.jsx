import React from 'react';
import {Paper, Tabs, Tab} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import AppBar from "@material-ui/core/AppBar";


const Footer = ({muscles, category, onSelect, width}) => {
    const index = category ? muscles.findIndex(group => group === category) + 1 : 0;

    const onIndexSelect = (e, index) =>
        onSelect(index === 0 ? '' : muscles[index - 1]);
    return (
        <Paper>
            <AppBar position="static" color="default">
            <Tabs
                value={index}
                onChange={onIndexSelect}
                indicatorColor="primary"
                textColor="primary"
                centered={width !== 'xs'}
                scrollable={(width === "xs").toString()}
                scrollButtons="on"
            >
                <Tab label={'All'}/>
                {muscles.map(group => <Tab key={group} label={group}/>)}
            </Tabs>
            </AppBar>
        </Paper>
    );
};

export default withWidth()(Footer);