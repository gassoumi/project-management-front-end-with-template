import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import {Selector} from '../index';
import {fetchSprints, deleteSprintById, clearCacheSprint, createSprint, updateSprint} from "../../../redux/actions";
import SprintUpdate from './SprintUpdate';
import axios from 'axios';
import SprintTable from './SprintTable';

import {SuspenseLoading} from "../../../Routes";
import DeleteDialog from '../common/DeleteDialog';
import {PageTitle} from "../../../layout-components";
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";
import {CardContent, IconButton, TablePagination, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Alert from "../common/Alert";


function Sprint(props) {

  const {
    pageSize, sprints, page, count, isFetching,
    fetchSprints, canEdit, deleteSprintById,
  } = props;

  const [open, setOpen] = React.useState(false);

  const [sprint, setSprint] = React.useState({});
  const [isNew, setIsNew] = React.useState(true);
  const [idSprint, setIdSprint] = React.useState(-1);

  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
  const [sprintToDelete, setSprintToDelete] = React.useState({});
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
    fetchSprints(paginationState.activePage, paginationState.itemsPerPage, `${sort}${paginationState.sort}`, paginationState.search);
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


  const handleClickOpen = () => {
    setOpen(true);
  };

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };


  const createNew = () => {
    setSprint({});
    setIsNew(true);
    setIdSprint(-1);
    handleClickOpen();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const handleEdit = idSprint => {
    setIsNew(false);
    setIdSprint(idSprint);
  };

  const handleDelete = sprint => {
    setSprintToDelete(sprint);
    setOpenDeleteDialog(true);
  };

  useEffect(() => {
    // fetchSprints(1, 10);
    return () => {
      props.clearCacheSprint();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search]);


  useEffect(() => {
    if (props.updateSuccess || props.deleteSuccess) {
      handleClose();
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [props.deleteSuccess, props.updateSuccess]);

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

  useEffect(() => {
    let active = true;

    if (idSprint === -1) {
      return undefined;
    }

    axios.get(`/api/sprints/${idSprint}`)
      .then(response => {
        axios.get(`/api/projects/${response.data.project}/`)
          .then(res => {
            if (active) {
              const sprint = {...response.data, project: res.data};
              setSprint(sprint);
              handleClickOpen();
              setIdSprint(-1);
            }
          });
      })
      .catch(error => console.log(error));

    return () => {
      active = false;
    }
  }, [idSprint]);


  return (
    <>
      <PageTitle
        titleHeading="Sprints"
        // titleDescription="Building a projects related application? Start from this layout."
      />
      <Fragment>
        <DeleteDialog
          object={sprintToDelete}
          open={openDeleteDialog}
          handleClose={handleCloseDeleteDialog}
          deleteObject={deleteSprintById}
          title=" Êtes-vous sûr de vouloir supprimer ce sprint?"
          label={sprintToDelete.name}/>
        <SprintUpdate
          createSprint={props.createSprint}
          updateSprint={props.updateSprint}
          isNew={isNew}
          sprint={sprint}
          open={open}
          handleClose={handleClose}/>

        <Card className="card-box mb-4">
          <div>
            <AddNew
              canEdit={props.canEdit}
              label="Sprints"
              count={props.count}
              buttonLabel="Ajouter un sprint"
              handleAdd={createNew}
              handleInput={handleInput}
              handleQuery={handleQuery}
              queryValue={query}
            />
          </div>
        </Card>

        {isFetching ?
          <SuspenseLoading/>
          : (sprints && sprints.length > 0) ?
            (<div className="example-card-seamless mb-4-spacing">
              <Card className="card-box mb-4">
                <div className="card-header pr-2">
                  <div className="card-header--title">Sprints status</div>
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
                    <SprintTable
                      canEdit={canEdit}
                      sprints={sprints}
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
                  <Alert label="Aucun sprint trouvé"/>
                </Card>
              </Fragment>
            )

        }
      </Fragment>
    </>
  );
}

Sprint.propTypes = {};

const mapStateToProps = (state) => {
  const {
    pagination: {sprints},
  } = state;
  //const listProjectIds = project.ids || [];
  const listSprint = Selector.getSprintsPage(state);

  return {
    sprints: listSprint,
    nextPageUrl: sprints.nextPageUrl,
    page: sprints.page,
    isFetching: sprints.isFetching,
    canEdit: state.auth.user.is_staff,
    count: sprints.count,
    pageSize: sprints.pageSize,
    updateSuccess: state.entity.sprint.updateSuccess,
    deleteSuccess: state.entity.sprint.deleteSuccess,
  };
};

export default connect(mapStateToProps, {
  fetchSprints,
  deleteSprintById,
  clearCacheSprint,
  createSprint,
  updateSprint
})(Sprint);