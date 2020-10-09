import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        "& .MuiListSubheader-root": {
            color: 'black',
        }
        /*  maxWidth: 360, */
    },
    inline: {
        display: 'inline',
    },
    paper: {
        width: '100%',
        wordWrap: 'break-word',
        wordBreak: 'break-word',
        /*   marginBottom: theme.spacing(2), */
        /*         height: '100%',
                display: 'flex',
                flexDirection: 'column', */
    },
}));


export default function TeamList(props) {
    const {items} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Team Scrum
                        </ListSubheader>}
                >
                    {items.map((item, index) => {
                        return (
                            <Fragment key={item.id}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Tooltip title={item.user.username}>
                                            <Avatar
                                                src={item.user.userProfile ? item.user.userProfile.photo : ""}
                                            />
                                        </Tooltip>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.user.username}
                                        secondary={<React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                className={classes.inline}
                                                color="textSecondary"
                                            >
                                                {item.classification}
                                            </Typography>

                                        </React.Fragment>}
                                    />

                                    {/*<ListItemSecondaryAction>*/}

                                    {/*     {item.project.designation} */}
                                    {/*</ListItemSecondaryAction>*/}
                                </ListItem>
                                {(index !== items.length - 1) && <Divider variant="middle" component="li"/>}
                            </Fragment>)
                    })}
                </List>
            </Paper>
        </div>
    );
}
