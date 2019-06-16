import React, {Fragment} from 'react';
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core";
import {Delete, Edit} from '@material-ui/icons'
import Form from "./Form";

// const styles = makeStyles()

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        height: 500,
        overflowY: 'auto'
    }
};

const Index = ({
                   muscles,
                   exercises,
                   category,
                   editMode,
                   exercise,
                   exercise: {
                       id,
                       title = ' Welcome!',
                       description = 'Please select an exercise from the list on the left',
                   },
                   onSelect,
                   onDelete,
                   onEditSelect,
                   onEdit
               }) => {
    return (
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Paper style={styles.Paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group ?
                            <Fragment key={group}>
                                <Typography
                                    variant="h5"
                                    style={{textTransform: 'capitalize'}}
                                >
                                    {group}
                                </Typography>
                                <List component='ul'>
                                    {exercises.map(({id, title}) =>
                                        <ListItem
                                            key={id}
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                            <ListItemText
                                                primary={title}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    onClick={() => onEditSelect(id)}
                                                >
                                                    <Edit/>
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => onDelete(id)}
                                                >
                                                    <Delete/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment> : null
                    )}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper style={styles.Paper}>
                    {editMode ?
                        <Form
                            exercise={exercise}
                            muscles={muscles}
                            onSubmit={onEdit}
                        />
                        : <>
                            <Typography variant="h4">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1">
                                {description}
                            </Typography>
                        </>
                    }

                </Paper>
            </Grid>
        </Grid>
    );
};

export default Index;