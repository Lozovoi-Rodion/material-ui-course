import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

// const styles = makeStyles()

const styles = {
    Paper: {
        padding: 22,
        marginTop: 10,
        marginBottom: 10
    }
};

const Index = () => {
    return (
        <Grid container>
            <Grid item sm>
                <LeftPane styles={styles}/>
            </Grid>
            <Grid item sm>
                <RightPane styles={styles}/>
            </Grid>
        </Grid>
    );
};

export default Index;