import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';

import {
    Button,
    TextField,
    Fab,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions,
    Dialog,
    FormControl,
    InputLabel,
    MenuItem,
    Select
} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
    formControl: {
        width: 520,
    }
});

class Create extends Component {
    state = {
        open: false,
        exercise: {
            title: '',
            description: '',
            muscles: ''
        },
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    };
    handleChange = name => event => {
        this.setState({
            exercise: {
                ...this.state.exercise,
                [name]: event.target.value
            }
        })
    };

    handleSubmit = () => {
        // TODO validate
        const {exercise} = this.state;
        this.props.onCreate({
            ...exercise,
            id: exercise.title.toLowerCase().replace(/ /g, '-')
        });
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    };

    render() {
        const {
            open,
            exercise: {
                title,
                description,
                muscles
            }
        } = this.state;
        const {muscles: categories, classes} = this.props;
        return (
            <>
                <Fab
                    aria-label="Add" mini="true"
                    onClick={this.handleToggle}
                >
                    <AddIcon/>
                </Fab>
                <Dialog open={open}
                        onClose={this.handleToggle}
                        aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
                    <DialogContent
                    >
                        <DialogContentText>
                            Please fill out the form below
                        </DialogContentText>
                        <form>
                            <TextField
                                label="Title"
                                value={title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                                className={classes.formControl}
                            />
                            <br/>
                            <FormControl
                                className={classes.formControl}
                            >
                                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                                <Select
                                    value={muscles}
                                    onChange={this.handleChange('muscles')}>
                                    {categories.map(category =>
                                        <MenuItem
                                            key={category}
                                            value={category}
                                        >
                                            {category}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <br/>
                            <TextField
                                className={classes.formControl}
                                label="Description"
                                multiline
                                rows="4"
                                value={description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                            />
                            <br/>

                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="outlined"
                            color="primary"
                            onClick={this.handleSubmit}
                        >
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default withStyles(styles)(Create);