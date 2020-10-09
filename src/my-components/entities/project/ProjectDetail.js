import React, {useEffect, useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Paper from '@material-ui/core/Paper';
import {Selector} from '../index'
import {fetchProjectById, fetchProjectTasks} from "../../../redux";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Loading from '../common/Loading';
import TeamList from './TeamList';
import Button from "@material-ui/core/Button";
import EditIcon from '@material-ui/icons/Edit';
import TasksProjectTable from './TasksProjectTable';
import {sleep} from "../../../redux/actions/sprint";
import axios from "axios";
import CircularProgress from '../common/CircularProgress';
import {SuspenseLoading} from "../../../Routes";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  markdown: {
    ...theme.typography.body2,
    // padding: theme.spacing(3, 0),
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    //backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

function ProjectDescription(props) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <Grid container item xs={12}>
          <Grid container justify={"flex-start"} item xs={8}>
            <Typography color={"error"} gutterBottom variant="h5">
              {props.project.designation}
            </Typography>
          </Grid>
          {props.canEdit &&
          <Grid item xs={4} container justify={"flex-end"}>
            <Grid item>
              <Button startIcon={<EditIcon/>}
                      onClick={props.handleEdit}
                      type="button"
                      variant="contained"
                      color={"secondary"}
              >
                Modifier
              </Button>
            </Grid>
          </Grid>
          }
        </Grid>
        <Typography gutterBottom variant='caption' paragraph>
          {moment(props.project.created_at).format('LL')}
        </Typography>
        <Typography color={"textPrimary"} gutterBottom variant="h6">Objective</Typography>
        <Typography paragraph>
          {props.project.objective}
        </Typography>
      </Paper>
    </>
  )
}


// TODO create not found page
function ProjectDetail(props) {

  const classes = useStyles();
  const id = props.match.params.id;
  const [stat, setStat] = useState([]);
  const [isStatLoaded, setIsStatLoaded] = useState(false);

  useEffect(() => {
    props.fetchProjectById(id);
    props.fetchProjectTasks(1, 10, id);
    let active = true;
    setIsStatLoaded(false);
    const fetch = async () => {
      try {
        await sleep(1e1); // For demo purposes.
        const response = await axios.get(`/api/projects/${id}/stat/`);
        const result = response.data;
        if (active) {
          setStat(result);
          // console.log(result);
        }
      } catch (e) {

      }
      if (active) {
        setIsStatLoaded(true);
      }
    };
    fetch();

    return () => {
      active = false;
    }
  }, [id]);


  // const isFetching = !props.isProjectLoaded || props.isFetchingProjectTasks || !isStatLoaded;

  const handleEdit = () => {
    props.history.push(`/project/${id}/edit`);
  };

  const fetchTasks = (page, pageSize) => {
    props.fetchProjectTasks(page, pageSize, id);
  };

  return (
    <>
      {
        !props.isProjectLoaded ?
          <SuspenseLoading/> :
          <Grid className={classes.root} container spacing={3}>
            <Grid className={classes.markdown} item xs={12} md={8}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <ProjectDescription
                    canEdit={props.canEdit}
                    handleEdit={handleEdit}
                    project={props.project}/>
                </Grid>
                {
                  props.count > 0 &&
                  <Grid item xs={12} sm={12}>
                    {
                      props.isFetchingProjectTasks ?
                        <CircularProgress/> :
                        <TasksProjectTable
                          rows={props.tasks}
                          count={props.count}
                          fetchTasks={fetchTasks}
                          page={props.page - 1}
                          pageSize={props.pageSize}
                        />
                    }
                  </Grid>
                }
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TeamList items={props.project.projectUsers}/>
                </Grid>
                {
                  stat.length > 0 &&
                  <Grid item xs={12}>
                  </Grid>
                }
              </Grid>
            </Grid>
            {/*{props.tasks.length !== 0 &&*/}
            {/*<Grid item xs={12} md={8}>*/}
            {/*    <TaskProjectTable rows={props.tasks}/>*/}
            {/*</Grid>*/}
            {/*}*/}
          </Grid>
      }
    </>
  );

}


ProjectDetail.propTypes = {
  project: PropTypes.object.isRequired,
  fetchProjectById: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const isLoaded = state.entity.project.isLoaded;
  const project = isLoaded ? Selector.getProjectById(state, id) : {};
  const tasks = Selector.getProjectTasksPage(state);

  const {
    pagination: {projectTasks},
  } = state;
  return {
    isProjectLoaded: isLoaded,
    project,
    tasks,
    isFetchingProjectTasks: projectTasks.isFetching,
    canEdit: state.auth.user.is_staff,
    count: projectTasks.count,
    page: projectTasks.page,
    pageSize: projectTasks.pageSize,
  }
};

export default connect(mapStateToProps, {fetchProjectById, fetchProjectTasks})(ProjectDetail);

/*

<Paper elevation={2} className={classes.paper}>
                                <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                    <PeopleIcon style={{color: purple[500]}} fontSize={"default"}/>
                                    Team Scrum
                                </Typography>
                                {props.project.projectUsers.map((projectUser) => (
                                    <Typography display="block" variant="body1" key={projectUser.username}>
                                        {projectUser.username}
                                    </Typography>
                                ))}
                            </Paper>

 */
