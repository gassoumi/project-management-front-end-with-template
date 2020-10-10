import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import ProblemForm from './ProblemForm';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from '@material-ui/core/styles';
import axios from 'axios';
import Loading from '../common/Loading';
import queryString from "query-string";
import {Card, Divider} from "@material-ui/core";
import {SuspenseLoading} from "../../../Routes";

//   color: theme.palette.text.secondary,

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.black,
  },
  formTitle: {
    textAlign: 'center',
  }
}));

function ProblemUpdate(props) {

  const classes = useStyles();
  const isNewProblem = !props.match.params || !props.match.params.id;
  const [problem, setProblem] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);


  // const idTask = queryString.parse(props.location.search).idTask || null;


  // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
  useEffect(() => {
    let active = true;

    const fetchProblem = async (id) => {
      setIsLoaded(false);
      try {
        const responseProblem = await axios.get(`/api/problems/${id}/`);
        const responseTask = await axios.get(`/api/tasks/${responseProblem.data.task}/`);
        if (active) {
          setProblem({...responseProblem.data, task: responseTask.data});
        }
      } catch (e) {
        console.log(e);
      }
      if (active) {
        setIsLoaded(true);
      }
    };

    const fetchTask = async (idTask) => {
      setIsLoaded(false);
      try {
        const responseTask = await axios.get(`/api/tasks/${idTask}/`);
        if (active) {
          setProblem({task: responseTask.data})
        }
      } catch (e) {
        console.log(e);
      }
      if (active) {
        setIsLoaded(true);
      }
    };

    if (!isNewProblem) {
      const id = props.match.params.id;
      fetchProblem(id);
    } else {
      const idTask = queryString.parse(props.location.search).idTask || null;
      if (idTask) {
        //we have idTask from url params
        fetchTask(idTask);
      } else {
        setProblem({});
      }
    }

    return () => {
      active = false;
    }
  }, [isNewProblem]);

  const handleCancel = () => {
    // props.history.push("/task" + props.location.search);
    props.history.goBack();
  };

  return (
    <>
      {!isNewProblem && !isLoaded ?
        <SuspenseLoading/> :
        <Grid container justify={"center"}>
          <Grid item xs={12} lg={9}>
            <Card className="mb-4">
              <div className="p-4 font-size-lg font-weight-bold">
                {isNewProblem ? "Ajouter un nouveau " : "Modifier le "} problème
              </div>
              <Divider/>
              <ProblemForm
                isNewProblem={isNewProblem}
                problem={problem}
                handleCancel={handleCancel}
                disablePickTask={!!(problem.task && isNewProblem)}
              />
            </Card>
          </Grid>
        </Grid>
      }
    </>
  );
}


ProblemUpdate.propTypes = {};

export default ProblemUpdate;
