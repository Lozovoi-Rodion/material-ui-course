import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Exercises from './components/Exercises';
import {muscles, exercises} from "./store";
import {Provider} from "./context";


class App extends Component {
    state = {
        exercises,
        category: '',
        exercise: {},
        editMode: false
    };

    getExercisesByMuscles = () => {
        const initExercises = muscles.reduce((exercises, category) => ({
            ...exercises,
            [category]: []
        }), {});

        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
            const {muscles} = exercise;
            exercises[muscles] = [...exercises[muscles], exercise];

            return exercises;
        }, initExercises))
    };

    handleCategorySelect = category =>
        this.setState({
            category
        });

    handleExerciseSelect = id =>
        this.setState(prevState => ({
            exercise: prevState.exercises.find(ex => ex.id === id),
            editMode: false
        }));

    handleExerciseCreate = exercise =>
        this.setState(prevState => ({
            exercises: [...prevState.exercises, exercise]
        }));

    handleExerciseDelete = id =>
        this.setState(prevState => ({
            exercises: prevState.exercises.filter(ex => ex.id !== id),
            editMode: prevState.exercise.id === id ? false : prevState.editMode,
            exercise: prevState.exercise.id === id ? {} : prevState.exercise
        }));

    handleExerciseSelectEdit = id =>
        this.setState(prevState => ({
            exercise: prevState.exercises.find(ex => ex.id === id), editMode: true
        }));
    handleExerciseEdit = exercise =>
        this.setState(prevState => ({
            exercises: [...prevState.exercises.filter(ex => ex.id !== exercise.id), exercise],
            // editMode: false
        }));
    getContext = () => ({
        muscles,
        ...this.state,
        onCategorySelect: this.handleCategorySelect,
        onCreate: this.handleExerciseCreate
    });

    render() {
        const exercises = this.getExercisesByMuscles(),
            {category, exercise, editMode} = this.state;
        return (
            <Provider value={this.getContext()}>
                <>
                    <CssBaseline/>
                    <Header/>
                    <Exercises
                        exercise={exercise}
                        category={category}
                        exercises={exercises}
                        editMode={editMode}
                        muscles={muscles}
                        onSelect={this.handleExerciseSelect}
                        onDelete={this.handleExerciseDelete}
                        onEditSelect={this.handleExerciseSelectEdit}
                        onEdit={this.handleExerciseEdit}
                    />
                    <Footer/>
                </>
            </Provider>
        )
            ;
    }
}

export default App;
