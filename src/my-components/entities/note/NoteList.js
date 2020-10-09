import React, {Fragment} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {Button, Card, Fab, Grid, Tooltip} from '@material-ui/core';

import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import moment from 'moment';
import {Link as RouterLink} from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {red} from "@material-ui/core/colors";


export function getColorNoteStatus(value) {
  if (value) {
    return 'success'
  } else {
    return 'danger';
  }
}

export default function NoteList(props) {

  const {notes, handleEdit, handleDelete} = props;
  return (
    <div className="pt-3">
      <Grid container spacing={4}>
        {notes.map(note => (
          <Grid key={note.id} item xs={12} sm={6} md={4}>

            <div
              className="card card-box-hover-rise mb-4"
              style={{height: '100%'}}
              // href="#/"
              // onClick={e => e.preventDefault()}
            >
              <div className="card-badges">
                <div className={`badge badge-${getColorNoteStatus(note.ok)} badge-pill`}>
                  {note.ok ? "Done" : "Not Done"}</div>
              </div>
              <div className="card-body card-body-avatar pt-4 d-flex flex-column flex-wrap">
                <h5 className="card-title font-weight-bold font-size-lg">
                  {note.note}
                </h5>
                <p className="card-text flex-grow-1">
                  {note.comment ? note.comment : "Pas encore de commentaire"}
                </p>
                <div className="card-date mt-2 d-flex align-items-end">
                  <div className="flex-grow-1 align-self-center">
                    <FontAwesomeIcon
                      icon={['far', 'clock']}
                      className="text-warning mr-1"
                    />
                    <span className="text-warning ">A faire à {moment(note.date).calendar()} </span>
                  </div>

                  <div className="d-flex justify-content-end align-items-end ">
                    <Tooltip arrow title="Modifier">
                      <Fab size="small" color="primary" onClick={() => handleEdit(note.id)} className="m-2">
                        <EditIcon/>
                      </Fab>
                    </Tooltip>
                    <Tooltip arrow title="Supprimer">
                      <Fab size="small" color="secondary" onClick={() => handleDelete(note)} className="m-2 bg-danger">
                        <DeleteIcon/>
                      </Fab>
                    </Tooltip>
                  </div>

                </div>
              </div>

            </div>

          </Grid>
        ))
        }
      </Grid>
    </div>
  );
}
