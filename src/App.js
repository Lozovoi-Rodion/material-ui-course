import React, {Component} from 'react';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Exercises from './components/Exercises';
import {muscles, exercises} from "./store";

class App extends Component {
    state = {
        exercises,
        category: '',
        exercise: {}
    };

    getExercisesByMuscles = () => {
        return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
            const {muscles} = exercise;
            exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] :
                [exercise];

            return exercises;
        }, {}))
    };

    handleCategorySelect = category => {
        this.setState({
            category
        })
    };
    handleExerciseSelect = id => {
        this.setState(prevState => ({
            exercise: prevState.exercises.find(ex => ex.id === id)
        }))
    };
    handleExerciseCreate = exercise => {
        this.setState(prevState => ({
            exercises: [...prevState.exercises, exercise]
        }))
    };

    render() {
        const exercises = this.getExercisesByMuscles(),
            {category, exercise} = this.state;
        return (
            <>
                <Header
                    muscles={muscles}
                    onExerciseCreate={this.handleExerciseCreate}
                />
                <Exercises
                    exercise={exercise}
                    category={category}
                    exercises={exercises}
                    onSelect={this.handleExerciseSelect}
                />
                <Footer
                    category={category}
                    muscles={muscles}
                    onSelect={this.handleCategorySelect}
                />
            </>
        )
            ;
    }
}

export default App;
