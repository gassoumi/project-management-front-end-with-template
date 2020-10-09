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
import moment from 'moment';
import Typography from "@material-ui/core/Typography";
import {getDisplayString} from "../utils";
import {Card, CardContent, Grid} from "@material-ui/core";
import {Briefcase, Layers, Settings, Users} from "react-feather";
import CountUp from "react-countup";
import {getColorSprint} from "../entities/sprint/SprintTable";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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

const getBackgroundColor = value => {
  let style = {};
  switch (value) {
    case "Cloturé":
      style.backgroundColor = "#007bff";
      break;
    case "En Cours":
      style.backgroundColor = "#6c757d";
      break;
    case "Archivé":
      style.backgroundColor = "#ffc107";
      break;
    case "Planifiè":
      style.backgroundColor = "#28a745";
      break;
    default:
      style.backgroundColor = "#ffc107";
  }
  return style;
};


export default function WeekSprint({items}) {
  const classes = useStyles();

  return (
    <>
      <Card className="card-box mb-4">
        <div className="card-header">
          <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
            Sprint de cette semaine
          </h4>
        </div>
        <List className="pt-0">
          {items.map((item, index) => {
            return (
              <Fragment key={item.id}>
                <ListItem>
                  {/*<ListItemAvatar>*/}
                  {/*  <Tooltip title={item.status} aria-label={item.status}>*/}
                  {/*    <Avatar style={getBackgroundColor(item.status)}>*/}
                  {/*      {item.status.charAt(0).toUpperCase()}*/}
                  {/*    </Avatar>*/}
                  {/*  </Tooltip>*/}
                  {/*</ListItemAvatar>*/}

                  <ListItemText
                    primary={item.name}
                    secondary={<React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                      >
                        <>
                          <FontAwesomeIcon
                            icon={['far', 'clock']}
                            className="text-warning mr-1"
                          />
                          <span className="text-warning">
                          {moment(item.desired_at).format('L')}
                          </span>
                        </>
                      </Typography>
                      <br/>
                      <Tooltip title="Nom projet"
                               aria-label="Nom projet">
                        <Typography
                          className={classes.inline}
                          component="span"
                          variant="body1"
                          color="textPrimary"
                        >
                          <Link component={RouterLink} to={`/project/${item.project.id}`}>
                            <span className="text-primary">
                                 {getDisplayString(item.project.designation, 30)}
                            </span>
                          </Link>
                        </Typography>
                      </Tooltip>
                    </React.Fragment>}
                  />

                  <ListItemSecondaryAction>
                    <div className={`badge badge-${getColorSprint(item.status)} px-4`}>{item.status}</div>
                  </ListItemSecondaryAction>
                </ListItem>
                {(index !== items.length - 1) && <Divider variant="middle" component="li"/>}
              </Fragment>)
          })}
        </List>
      </Card>
    </>
  );
}
