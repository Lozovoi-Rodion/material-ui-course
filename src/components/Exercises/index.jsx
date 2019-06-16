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
import withStyles  from "@material-ui/core/styles/withStyles";
// const styles = makeStyles()

const styles = theme => ({
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    paper: {
        padding: theme.spacing.unit * 2,
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]:{
            marginTop: 5,
            height: 'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]:{
            height: '100%'
        }
    },
    container:{
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)',
        },
            [theme.breakpoints.down('xs')]:{
            height: 'calc(100% - 56px - 48px)',
        }
    },
    item:{
        [theme.breakpoints.down('xs')]:{
            height: '50%'
        }
    }
});

const Index = ({
                   classes,
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
        <Grid container className={classes.container}>
            <Grid item className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper}>
                    {exercises.map(([group, exercises]) =>
                        !category || category === group ?
                            <Fragment key={group}>
                                <Typography
                                    color="secondary"
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
            <Grid item  className={classes.item} xs={12} sm={6}>
                <Paper className={classes.paper}>
                    <Typography
                        color="secondary"
                        variant="h4"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    {editMode ?
                        <Form
                            id={id}
                            exercise={exercise}
                            muscles={muscles}
                            onSubmit={onEdit}
                        />
                        :
                        <Typography variant="subtitle1">
                            {description}
                        </Typography>
                    }
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Index);