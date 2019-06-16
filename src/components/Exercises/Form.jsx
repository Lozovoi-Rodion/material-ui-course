import React, {Component} from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    formControl: {
        width: 270,
    },
});

class Form extends Component {

    state = this.getInitialState();

    getInitialState() {
        const {exercise} = this.props;
        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    // static getDerivedStateFromProps({exercise}){
    //     return exercise || null
    // }

    handleChange = name => event =>
        this.setState({
            [name]: event.target.value
        });

    handleSubmit = () => {
        // TODO validate
        this.props.onSubmit({
            id: this.state.title.toLowerCase().replace(/ /g, '-'),
            ...this.state,
        });
        let smth = this.getInitialState();
        console.log(smth)
        // this.setState(this.getInitialState())
    };

    render() {
        const {
                title,
                description,
                muscles
            } = this.state,
            {classes, exercise, muscles: categories} = this.props;

        return (
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
                    <InputLabel
                        htmlFor="muscles">Muscles
                    </InputLabel>
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
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={this.handleSubmit}
                >
                    {exercise ? 'Edit' : 'Create '}
                </Button>
            </form>

        );
    }
}

export default withStyles(styles)(Form);