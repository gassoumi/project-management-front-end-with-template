import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import {Link as RouterLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import moment from 'moment';
import {getDisplayString} from "../utils";
import {Avatar, Card, IconButton, LinearProgress, Tooltip} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AvatarGroup from "@material-ui/lab/AvatarGroup/AvatarGroup";
import avatar1 from "../../assets/images/avatars/avatar1.jpg";
import avatar2 from "../../assets/images/avatars/avatar2.jpg";
import avatar3 from "../../assets/images/avatars/avatar3.jpg";
import avatar4 from "../../assets/images/avatars/avatar4.jpg";
import avatar6 from "../../assets/images/avatars/avatar6.jpg";
import avatar5 from "../../assets/images/avatars/avatar5.jpg";
import avatar7 from "../../assets/images/avatars/avatar7.jpg";
import {getAvatar} from "../entities/project/ProjectTable";


// https://stackoverflow.com/questions/60969224/how-to-override-muipaper-root-style-in-material-table
// https://material-ui.com/styles/basics/#nesting-selectors
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    width: '100%',
    "& .MuiTable-root caption": {
      textAlign: 'end'
    }
  },
  paper: {
    width: '100%',

  },
}));
// in paper
/*   marginBottom: theme.spacing(2), */

export default function LatestProject(props) {
  const classes = useStyles();
  const {rows} = props;
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title font-size-lg px-1 py-1 font-weight-bold">
            Derniers Projets
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-hover text-nowrap mb-0">
            <thead>
            <tr>
              <th className="text-left" style={{width: 180}}>
                Code Projet
              </th>
              <th className="text-left">
                Nom Projet
              </th>
              <th className="text-center">Date de création</th>
              <th className="text-center">Members</th>
              <th className="text-center"></th>
            </tr>
            </thead>
            <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td>{row.code}</td>
                <td className="font-weight-bold">{row.designation}</td>
                <td className="text-center">{moment(row.created_at).format('LL')}</td>
                <td className="text-center">
                  {(row.projectUsers && row.projectUsers.length > 0) &&
                  <AvatarGroup className="d-flex justify-content-center">
                    {row.projectUsers.length > 0 &&
                    getAvatar(0, row)}
                    {row.projectUsers.length > 1 &&
                    getAvatar(1, row)}
                    {row.projectUsers.length > 2 &&
                    getAvatar(2, row)}
                    {row.projectUsers.length > 3 &&
                    getAvatar(3, row)}
                    {row.projectUsers.length > 4 &&
                    getAvatar(4, row)}
                  </AvatarGroup>
                  }
                </td>
                <td className="text-center">
                  <Tooltip arrow title="Consulter">
                    <IconButton
                      component={RouterLink}
                      to={`/project/${row.id}`}
                      size="small" color="primary">
                      <FontAwesomeIcon icon={['fas', 'arrow-right']}/>
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer py-3 text-center">
          <Button size="small" variant="outlined" color="secondary">
            Voir tout
          </Button>
        </div>
      </Card>

    </Fragment>
  );
}
