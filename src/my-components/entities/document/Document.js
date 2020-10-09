import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Loading from "../common/Loading";
import DocumentTable from "./DocumentTable";
import {Selector} from "../index";
import {connect} from "react-redux";
import {fetchDocuments, updateDocument, clearCacheDocument} from "../../../redux";
import DeleteDialog from '../common/DeleteDialog';
import queryString from 'query-string';
import GreenButton from "../common/GreenButton";
import {PageTitle} from "../../../layout-components";
import Card from "@material-ui/core/Card";
import AddNew from "../common/AddNew";
import {SuspenseLoading} from "../../../Routes";
import {CardContent, IconButton, TablePagination, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Alert from "../common/Alert";
import {getSortState, overridePaginationStateWithQueryParams} from "../../../utils";


Document.propTypes = {};

function Document(props) {

  const {
    canEdit, documents, count, updateSuccess, clearCacheDocument,
    fetchDocuments, isFetching, pageSize, page, updateDocument, deleteSuccess,
  } = props;


  const [open, setOpen] = useState(false);
  // document to delete
  const [document, setDocument] = useState({});
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, props.pageSize), props.location.search)
  );
  const [query, setQuery] = React.useState(paginationState.search);
  const status = queryString.parse(props.location.search).status || "AC";

  // useEffect(() => {
  //   fetchDocuments(1, 5, `status=${status}`);
  // }, [status]);

  // useEffect(() => {
  //   if (deleteSuccess || updateSuccess) {
  //     fetchDocuments(1, 5, `status=${status}`);
  //   }
  // }, [deleteSuccess, updateSuccess]);

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
    fetchDocuments(paginationState.activePage, paginationState.itemsPerPage, `status=${status}`, `${sort}${paginationState.sort}`, paginationState.search);
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

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' && paginationState.sort === p ? 'desc' : 'asc',
      sort: p,
    });
  };

  useEffect(() => {
    // fetchSprints(1, 10);
    return () => {
      clearCacheDocument();
    }
  }, []);

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort, paginationState.itemsPerPage, paginationState.search, status]);


  useEffect(() => {
    if (deleteSuccess || updateSuccess) {
      if (paginationState.activePage === 1) {
        sortEntities();
      } else {
        setPaginationState({
          ...paginationState,
          activePage: 1,
        });
      }
    }
  }, [deleteSuccess, updateSuccess]);

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


  const createNew = () => {
    props.history.push('/document/create');
  };

  const handleEdit = (id) => {
    props.history.push(`/document/${id}/edit`);
  };

  const handleDelete = (document) => {
    setDocument(document);
    setOpen(true);
  };

  const deleteDocument = document => {
    if (document.status === 'AC') {
      const formData = new FormData();
      formData.append('status', 'EX');
      updateDocument(document.id, formData);
    }
  };

  return (
    <>
      <PageTitle
        titleHeading="Documents"
        // titleDescription="Building a projects related application? Start from this layout."
      />
      <DeleteDialog
        title={"Êtes-vous sûr de vouloir de mettre ce document a la liste des documents à périmés"}
        open={open}
        object={document}
        handleClose={() => setOpen(false)}
        deleteObject={deleteDocument}
        label={document.description}
      />
      <Card className="card-box mb-4">
        <div>
          <AddNew
            canEdit={canEdit}
            label="Documents"
            count={count}
            buttonLabel="Ajouter un document"
            handleAdd={createNew}
            handleInput={handleInput}
            handleQuery={handleQuery}
            queryValue={query}
          />
        </div>
      </Card>

      {isFetching ?
        <SuspenseLoading/>
        : (documents && documents.length > 0) ?
          (<div className="example-card-seamless mb-4-spacing">
            <Card className="card-box mb-4">
              <div className="card-header pr-2">
                <div className="card-header--title">Documents status</div>
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
                  <DocumentTable
                    canEdit={canEdit}
                    documents={documents}
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
                  count={count}
                  rowsPerPage={pageSize}
                  page={page - 1}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </div>
            </Card>
          </div>) :
          (<Fragment>
              <Card className="card-box p-2 mb-4">
                <Alert label="Aucun documents trouvé"/>
              </Card>
            </Fragment>
          )
      }
    </>
  );
}

const mapStateToProps = (state) => {
  const {
    pagination: {documents},
    entity: {document}
  } = state;
  const listDocument = Selector.getDocumentsPage(state);

  return {
    documents: listDocument,
    nextPageUrl: documents.nextPageUrl,
    page: documents.page,
    count: documents.count,
    isFetching: documents.isFetching,
    canEdit: state.auth.user.is_staff,
    pageSize: documents.pageSize,
    deleteSuccess: document.deleteSuccess,
    updateSuccess: document.updateSuccess,
  };
};

export default connect(mapStateToProps, {fetchDocuments, updateDocument, clearCacheDocument})(Document);
