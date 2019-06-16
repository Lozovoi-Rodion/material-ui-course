import React, {Component} from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@material-ui/core";


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

    // componentWillReceiveProps({exercise} ) {
    // this.setState({
    //     ...exercise
    // })
    // }

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
            {exercise, muscles: categories} = this.props;

        return (
            <form>
                <TextField
                    label="Title"
                    value={title}
                    onChange={this.handleChange('title')}
                    margin="normal"
                    fullWidth
                />
                <br/>
                <FormControl
                    fullWidth
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
                    fullWidth
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
                    disabled={!title || !muscles}
                >
                    {exercise ? 'Edit' : 'Create '}
                </Button>
            </form>

        );
    }
}

export default Form;