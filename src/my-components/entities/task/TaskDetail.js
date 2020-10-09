import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {fetchTaskById, clearCacheTask, clearCacheProblem, fetchProblemsByTask} from "../../../redux";
import {connect} from "react-redux";
import {Selector} from "../index";
import Loading from '../common/Loading';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from 'moment';
import Divider from '@material-ui/core/Divider';
import TaskProblemsTable from './TaskProblemsTable';
import CircularProgress from '../common/CircularProgress';

TaskDetail.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDivider-root ": {
      padding: 0,
      margin: 0
    }
  },
  paper: {
    wordWrap: 'break-word',
    wordBreak: 'break-word',
  },
  content: {
    padding: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(1),
    // wordBreak: 'break-all',
    // wordWrap: 'break-word',

  },
  comments: {
    paddingLeft: theme.spacing(3)
  },
  inputComment: {
    marginTop: theme.spacing(2),
  },
  circularProgress: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(2),
    justifyContent: 'center'
  },
  buttons: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // marginLeft: theme.spacing(1),
    // '& > *': {
    //     margin: theme.spacing(1),
    // },
  },
  title: {
    fontWeight: 500,
  }
}));

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function TaskDetail(props) {
  const classes = useStyles();
  const id = props.match.params.id;
  const {task, isLoaded, fetchTaskById, clearCacheTask, clearCacheProblem} = props;

  useEffect(() => {
    fetchTaskById(id);
    // props.fetchProblemsByTask(1, null, 10);
    return () => {
      clearCacheTask();
      clearCacheProblem();
    }
  }, [id]);

  useEffect(() => {
    if (isLoaded) {
      console.log("tasks is loaded");
      props.fetchProblemsByTask(1, id, 10);
    }
  }, [isLoaded]);

  const OldElement = (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography variant={"subtitle2"} gutterBottom={true}>
          Date Début
        </Typography>
        <Typography variant={"body1"} gutterBottom={true}>
          {moment(task.start_at).format('LL')}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant={"subtitle2"} gutterBottom={true}>
          Date Fin
        </Typography>
        <Typography variant={"body1"} gutterBottom={true}>
          {moment(task.end_at).format('LL')}
        </Typography>
      </Grid>
    </Grid>
  );

  const NewElement = (
    <>
      <Typography variant={"subtitle2"} gutterBottom={true}>
        Date Début
      </Typography>
      <Typography variant={"body1"} gutterBottom={true}>
        {moment(task.start_at).format('LL')}
      </Typography>

      <Typography variant={"subtitle2"} gutterBottom={true}>
        Date Fin
      </Typography>
      <Typography variant={"body1"} gutterBottom={true}>
        {moment(task.end_at).format('LL')}
      </Typography>
    </>
  );

  const handleEdit = (id) => {
    // props.history.push(`/task/${id}/edit`);
  };

  const handleDelete = (task) => {
    // setTask(task);
    // setOpen(true);
  };

  console.log(props.problems);

  return (
    <>
      {!isLoaded ?
        <Loading/> :
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper} elevation={2}>
                <Typography className={classes.content} variant={"h5"}>
                  Information du tache
                </Typography>
                <Divider/>
                <div className={classes.content}>
                  <Typography variant={"subtitle2"} gutterBottom={true}>
                    Description
                  </Typography>
                  <Typography variant={"body1"} gutterBottom={true}>
                    {task.description}
                  </Typography>
                  <Typography variant={"subtitle2"} gutterBottom={true}>
                    Responsable
                  </Typography>
                  <Typography variant={"body1"} gutterBottom={true}>
                    {task.user.username}
                  </Typography>

                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Typography variant={"subtitle2"} gutterBottom={true}>
                        Date Début
                      </Typography>
                      <Typography variant={"body1"} gutterBottom={true}>
                        {moment(task.start_at).format('LL')}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant={"subtitle2"} gutterBottom={true}>
                        Date Fin
                      </Typography>
                      <Typography variant={"body1"} gutterBottom={true}>
                        {moment(task.end_at).format('LL')}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper} elevation={2}>
                <Typography className={classes.content} variant={"h5"}>
                  Information du Sprint
                </Typography>
                <Divider/>
                <div className={classes.content}>
                  <Typography variant={"subtitle2"} gutterBottom={true}>
                    Sprint
                  </Typography>
                  <Typography variant={"body1"} gutterBottom={true}>
                    {task.sprint.name}
                  </Typography>

                  <Typography variant={"subtitle2"} gutterBottom={true}>
                    Date Souhaité
                  </Typography>
                  <Typography variant={"body1"} gutterBottom={true}>
                    {moment(task.sprint.desired_at).format('LL')}
                  </Typography>

                  <Typography variant={"subtitle2"} gutterBottom={true}>
                    Statut
                  </Typography>
                  <Typography variant={"body1"} gutterBottom={true}>
                    {task.sprint.status}
                  </Typography>
                </div>
              </Paper>
            </Grid>
            {props.isFetching ?
              <CircularProgress/> :
              <Grid item xs={12}>
                <TaskProblemsTable
                  canEdit={props.canEdit}
                  rows={props.problems}
                  count={props.count}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  fetchProblems={props.fetchProblems}
                  page={props.page - 1}
                  pageSize={props.pageSize}
                />
              </Grid>
            }
          </Grid>
        </>}
    </>
  )
}

const mapStateToProps = (state, ownProps) => {

  const {
    pagination: {problems},
    entity: {problem}
  } = state;
  const listProblems = Selector.getProblemsPage(state);

  const id = ownProps.match.params.id;
  const isLoaded = state.entity.task.isLoaded;
  const task = Selector.getTaskById(state, id);
  return {
    task,
    isLoaded,
    problems: listProblems,
    nextPageUrl: problems.nextPageUrl,
    isFetching: problems.isFetching,
    canEdit: state.auth.user.is_staff,
    count: problems.count,
    page: problems.page,
    pageSize: problems.pageSize,
    deleteSuccess: problem.deleteSuccess,
  }
};

export default connect(mapStateToProps, {
  fetchTaskById, clearCacheTask, clearCacheProblem,
  fetchProblemsByTask
})(TaskDetail);
