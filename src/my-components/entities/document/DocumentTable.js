import React from 'react';
import PropTypes from 'prop-types';
import {IconButton, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import moment from 'moment';
import {getDisplayString} from "../../utils";
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';

DocumentTable.propTypes = {};

export function getFileName(path) {
  if (typeof path !== "string") {
    return undefined;
  }
  const index = path.lastIndexOf("/");
  if (index > -1) {
    return path.substring(index + 1);
  }
  return path;
}

function DocumentTable({documents, canEdit, sort, handleEdit, handleDelete}) {
  return (
    <table className="text-nowrap mb-0 table table-borderless table-hover">
      <thead>
      <tr>
        <th style={{cursor: 'pointer'}} onClick={sort('id')}>
          ID <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('code')}>
          Code Document <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('description')}>
          Description <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('version')}>
          Version <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('task')}>
          Tache <FontAwesomeIcon icon="sort"/>
        </th>
        <th className="text-left" style={{cursor: 'pointer'}} onClick={sort('version')}>
          Nom du fichier <FontAwesomeIcon icon="sort"/>
        </th>
        {canEdit && <th className="text-center">Actions</th>}
      </tr>
      </thead>
      <tbody>
      {documents.map(document => (
        <tr key={document.id}>
          <td>{document.id}</td>
          <td>
            {document.code}
          </td>
          <td>
            {document.description}
          </td>
          <td>
            {document.version}
          </td>
          <td className="text-info">
            {(document.task && document.task.description) &&
            <Link component={RouterLink} to={`/task/${document.task.id}`}>
                      <span className="text-primary">
                        {getDisplayString(document.task.description)}
                      </span>
            </Link>}
          </td>
          <td>
            <Link target="_blank" rel="noreferrer" href={document.docFile}>
                <span className="text-primary">
              {getFileName(document.docFile)}
                </span>
            </Link>
          </td>
          {canEdit &&
          <td className="text-center">
            <Tooltip arrow title="Modifier">
              <IconButton
                onClick={() => handleEdit(document.id)}
                className="text-primary">
                <FontAwesomeIcon
                  icon={['fas', 'pen']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Supprimer">
              <IconButton
                onClick={() => handleDelete(document)}
                className="text-danger">
                <FontAwesomeIcon
                  icon={['far', 'trash-alt']}
                  className="font-size-sm"
                />
              </IconButton>
            </Tooltip>
          </td>}
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default DocumentTable;
