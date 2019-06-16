import React, {Component} from 'react';
import {Paper, Tabs, Tab} from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import AppBar from "@material-ui/core/AppBar";
import {withContext} from "../../context";

class Footer extends Component {
    onIndexSelect = (e, index) => {
        const {onCategorySelect, muscles} = this.props;
        onCategorySelect(index === 0 ? '' : muscles[index - 1])
    };

    getIndex = () => {
        const {muscles, category} = this.props;
        return category ? muscles.findIndex(group => group === category) + 1 : 0;}

    render() {
        const {width, muscles} = this.props;
        return (
            <Paper>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.getIndex()}
                        onChange={this.onIndexSelect}
                        indicatorColor="primary"
                        textColor="primary"
                        centered={width !== 'xs'}
                        variant={(width === "xs").toString() ? "scrollable" : false}
                        scrollButtons="on"
                    >
                        <Tab label={'All'}/>
                        {muscles.map(group => <Tab key={group} label={group}/>)}
                    </Tabs>
                </AppBar>
            </Paper>
        );
    }
}


export default withContext(withWidth()(Footer));