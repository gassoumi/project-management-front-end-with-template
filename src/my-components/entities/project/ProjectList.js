import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Card, Grid, Tooltip} from "@material-ui/core";
import people2 from "../../../assets/images/stock-photos/people-2.jpg";
import {getDisplayString} from "../../utils";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouteMatch} from "react-router-dom";
import {Link as RouterLink} from 'react-router-dom';

ProjectList.propTypes = {};

function ProjectList({projects, canEdit, handleDelete}) {
  let match = useRouteMatch("");
  const getUsersClasses = index => {
    let classes = "badge mt-1 mb-4 font-weight-normal font-size-lg px-4 py-1 h-auto badge-neutral-";
    const remainder = index % 3;
    switch (remainder) {
      case 0 :
        classes += "success text-success";
        break;
      case 1:
        classes += "danger text-danger";
        break;
      default:
        classes += "warning text-warning";
        break;
    }
    return classes;
  };

  return (
    <Fragment>
      {projects.map((project, index) => (
        <Grid key={project.id} item xs={12} md={6} lg={4}>
          <Card style={{height: '100%'}} className="card-box p-4 mb-4">
            <div className="text-center">
              <>
                {/*<div className="avatar-icon-wrapper rounded-circle m-0">*/}
                {/*  <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">*/}
                {/*    <div className="rounded-circle overflow-hidden">*/}
                {/*      <img alt="..." className="img-fluid" src={people2}/>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </>
              <Tooltip arrow title={project.designation}>
                <h3 className="font-weight-bold mt-3">{getDisplayString(project.designation, 22)}</h3>
              </Tooltip>
              {
                (project.projectUsers && project.projectUsers.length > 0) &&
                <div className={getUsersClasses(index)}>
                  <span className="font-weight-bold pr-1"> {project.projectUsers.length} </span> utilisateurs
                  actifs
                </div>
              }
              <p className="mb-0 text-black-50">
                {getDisplayString(project.objective, 150)}
              </p>

              <div className="pt-3">
                {canEdit &&
                <Tooltip arrow title="Modifier">
                  <Button
                    component={RouterLink}
                    to={`${match.url}/${project.id}/edit`}
                    variant="outlined"
                    color="primary"
                    size="small"
                    className="m-1 d-40"><span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['fas', 'pen']}
            className="font-size-lg"
          />
          </span>
                  </Button>
                </Tooltip>}

                <Tooltip arrow title="Consulter">
                  <Button
                    component={RouterLink}
                    to={`${match.url}/${project.id}`}
                    variant="outlined"
                    color="inherit"
                    size="small"
                    className="m-1 d-40 btn text-info">
          <span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['fas', 'eye']}
            className="font-size-lg"
          />
          </span>
                  </Button>
                </Tooltip>
                {canEdit && <Tooltip arrow title="Supprimer">
                  <Button
                    onClick={() => handleDelete(project)}
                    color="inherit"
                    className="m-1 d-40 btn text-danger"
                    variant="outlined"
                    size="small"
                  >
          <span className="btn-wrapper--icon">
          <FontAwesomeIcon
            icon={['far', 'trash-alt']}
            className="font-size-lg"
          />
          </span>
                  </Button>
                </Tooltip>
                }
              </div>
            </div>

          </Card>
        </Grid>
      ))}
    </Fragment>
  );
}

export default ProjectList;
