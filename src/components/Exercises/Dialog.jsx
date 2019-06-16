import React, {Component} from 'react';

import {
    Fab,
    DialogTitle,
    DialogContentText,
    DialogContent,
    Dialog,
} from "@material-ui/core";
import {withContext} from "../../context";
import AddIcon from '@material-ui/icons/Add';
import Form from "./Form";


class CreateDialog extends Component {
    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    };
    handleFormSubmit = exercise => {
        this.handleToggle();
        this.props.onCreate(exercise)
    };

    render() {
        const {
                open,
            } = this.state,
            {muscles} = this.props;
        return (
            <>
                <Fab
                    color="secondary"
                    aria-label="Add" mini="true"
                    onClick={this.handleToggle}
                >
                    <AddIcon/>
                </Fab>
                <Dialog open={open}
                        onClose={this.handleToggle}
                        aria-labelledby="form-dialog-title"
                        maxWidth="xs"
                >
                    <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
                    <DialogContent
                    >
                        <DialogContentText>
                            Please fill out the form below
                        </DialogContentText>
                        <Form
                            muscles={muscles}
                            onSubmit={this.handleFormSubmit}
                        />
                    </DialogContent>
                </Dialog>
            </>
        );
    }
}

export default withContext(CreateDialog);