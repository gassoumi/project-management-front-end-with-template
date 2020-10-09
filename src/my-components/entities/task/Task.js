import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {fade, makeStyles, withStyles} from "@material-ui/core/styles";
import {green, purple} from '@material-ui/core/colors';
import {Selector} from "../index";
import {connect} from "react-redux";
import {fetchTasks, deleteTaskById, clearCacheTask, clearCacheProject} from "../../../redux";
import TaskTable from './TaskTable';
import Loading from '../common/Loading';
import {Link as RouterLink} from 'react-router-dom';
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteDialog from '../common/DeleteDialog';
import GreenButton from "../common/GreenButton";
import {PageTitle} from "../../../layout-components";
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import {SuspenseLoading} from "../../../Routes";
import {CardContent, IconButton, TablePagination, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Alert from "../common/Alert";


// TODO file plugin
// https://github.com/react-dropzone/react-dropzone/
// plugins
// https://falcon.technext.it/plugins/plyr

// https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks
// TODO 4 side Effect and react hooks
// https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns

// TODO 5 add event listener
// https://forum.freecodecamp.org/t/react-add-event-listener/201983
// https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component
function Task(props) {

  const [open, setOpen] = useState(false);
  const [task, setTask] = useState({});
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [query, setQuery] = React.useState(paginationState.search);


  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  const handleQuery = (event) => {
    setPaginationState({
      ...paginationState,
      activePage: 1,
      search: query
    })
  };

  const sortEntities = () => {
    let sort = paginationState.order === 'asc' ? "" : "-";
    props.fetchTasks(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
    let endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (paginationState.search) {
      endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}&search=${paginationState.search}`;
    }
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };


  const handleChangePage = (event, newPage) => {
    setPaginationState({
      ...paginationState,
      activePage: newPage + 1
    });
  };

  const handleChangeRowsPerPage = (event) => {
    const rowPerPage = parseInt(event.target.value, 10);
    setPaginationState({
      ...paginationState,
      itemsPerPage: rowPerPage,
      activePage: 1,
    });
  };

  useEffect(() => {
    // props.fetchTasks();
    return () => {
      props.clearCacheTask();
      props.clearCacheProject();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search]);


  useEffect(() => {
    if (props.deleteSuccess) {
      setOpen(false);
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [props.deleteSuccess]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page') || 1;
    const sort = params.get('sort');
    if (sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    } else {
      setPaginationState({
        ...paginationState,
        activePage: parseInt(page),
      });
    }
  }, [props.location.search]);


  const handleEdit = (id) => {
    props.history.push(`/task/${id}/edit`);
  };

  const handleDelete = (task) => {
    setTask(task);
    setOpen(true);
  };

  const createNew = () => {
    props.history.push("/task/create");
  };

  const handleCreateNewProblem = idTask => {
    props.history.push(`/problem/create?idTask=${idTask}`);
  };

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };

  return (
    <>
      <PageTitle
        titleHeading="Taches"
      />
      <DeleteDialog
        open={open}
        object={task}
        handleClose={() => setOpen(false)}
        deleteObject={props.deleteTaskById}
        title="Êtes-vous sûr de vouloir supprimer cette tâche?"
        label={task.description}
      />
      <Card className="card-box mb-4">
        <div>
          <AddNew
            canEdit={props.canEdit}
            label="Taches"
            count={props.count}
            buttonLabel="Ajouter une tache"
            handleAdd={createNew}
            handleInput={handleInput}
            handleQuery={handleQuery}
            queryValue={query}
          />
        </div>
      </Card>
      {props.isFetching ?
        <SuspenseLoading/>
        : (props.tasks && props.tasks.length > 0) ?
          (<div className="example-card-seamless mb-4-spacing">
            <Card className="card-box mb-4">
              <div className="card-header pr-2">
                <div className="card-header--title">Taches status</div>
                <div className="card-header--actions">
                  <Tooltip arrow title="Refresh">
                    <IconButton size="small" color="primary" className="mr-3">
                      <FontAwesomeIcon icon={['fas', 'cog']} spin/>
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              <CardContent className="p-3">
                <div className="table-responsive">
                  <TaskTable
                    canEdit={props.canEdit}
                    tasks={props.tasks}
                    count={props.count}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    sort={sort}
                  />
                </div>
              </CardContent>
              <div className="card-footer p-1 bg-secondary">
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={props.count}
                  rowsPerPage={props.pageSize}
                  page={props.page - 1}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </div>
            </Card>
          </div>) :
          (<Fragment>
              <Card className="card-box p-2 mb-4">
                <Alert label="Aucun tache trouvé"/>
              </Card>
            </Fragment>
          )
      }
    </>
  );
}

Task.propTypes = {};

const mapStateToProps = (state) => {
  const {
    pagination: {tasks},
    entity: {task}
  } = state;
  const listTask = Selector.getTasksPage(state);

  return {
    tasks: listTask,
    nextPageUrl: tasks.nextPageUrl,
    isFetching: tasks.isFetching,
    canEdit: state.auth.user.is_staff,
    count: tasks.count,
    page: tasks.page,
    pageSize: tasks.pageSize,
    deleteSuccess: task.deleteSuccess,
    authenticatedUser: state.auth.user
  };
};

export default connect(mapStateToProps, {fetchTasks, deleteTaskById, clearCacheTask, clearCacheProject})(Task);

