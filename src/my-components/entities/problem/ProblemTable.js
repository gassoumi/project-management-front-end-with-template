import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from 'moment';
import {getDisplayString} from "../../utils";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

ProblemTable.propTypes = {};

export const getColorProblem = value => {
    if (value === "NON_CLOTURE") {
      return "danger";
    }
    return "success";
  }
;


function ProblemTable({problems, sort, handleEdit, handleDelete}) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
      <tr>
        <th style={{cursor: 'pointer'}} onClick={sort('id')}>
          ID <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}}>
          Projet
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('task')}>
          Tache <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('description')}>
          Description <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('resolutionTools')}>
          Outils de résolutions <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-center" style={{cursor: 'pointer'}} onClick={sort('status')}>
          Statut <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('start_at')}>
          Date Debut <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('end_at')}>
          Date fin <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-center">Actions</th>
      </tr>
      </thead>
      <tbody>
      {problems.map(problem => (
        <tr key={problem.id}>
          <td>{problem.id}</td>
          <td>
            {
              problem.task && problem.task.sprint && problem.task.sprint.project &&
              <Link component={RouterLink}
                    to={`/project/${problem.task.sprint.project.id}`}>
               <span className="text-primary">
              {getDisplayString(problem.task.sprint.project.designation, 40)}
               </span>
              </Link>
            }
          </td>
          <td className="text-info">
            {
              problem.task && problem.task.id &&
              <Link
                component={RouterLink}
                to={`/task/${problem.task.id}`}>
                    <span className="text-primary">
                      {problem.task.description}
                    </span>
              </Link>
            }
          </td>
          <td>
            {problem.description}
          </td>
          <td>
            {problem.resolutionTools}
          </td>
          <td className="text-center">
            <div className={`badge badge-${getColorProblem(problem.status)} px-4`}>
              {problem.status === "NON_CLOTURE" ? "NON CLOTURE" : "CLOTURE"}
            </div>
          </td>
          <td>
            {moment(problem.start_at).format('L')}
          </td>
          <td>
            {moment(problem.end_at).format('L')}
          </td>
          <td className="text-center">
            <Tooltip arrow title="Modifier">
              <IconButton
                onClick={() => handleEdit(problem.id)}
                className="text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'pen']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Supprimer">
              <IconButton
                onClick={() => handleDelete(problem)}
                className="text-danger">
                <FontAwesomeIcon
                  icon={['far', 'trash-alt']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default ProblemTable;
