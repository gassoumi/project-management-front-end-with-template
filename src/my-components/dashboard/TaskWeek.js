import React, {Fragment} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
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
import moment from 'moment';
import {getDisplayString} from "../utils";
import Link from "@material-ui/core/Link";
import {Avatar, Card, Divider, Grid} from "@material-ui/core";
import Trend from "react-trend";
import CountUp from "react-countup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getColorTask} from "../entities/task/TaskTable";


export default function WeekTask(props) {
  const {rows} = props;

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title font-size-lg  px-1 py-1 font-weight-bold">
            Plan d'action de cette semaine
          </div>
        </div>

        {/* <div className="card-header">*/}
        {/*  <div className="card-header--title font-size-lg font-weight-bold">*/}
        {/*   Plan d'action de cette semaine*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="font-size-lg px-3 py-4 font-weight-bold">*/}
        {/*  Plan d'action de cette semaine*/}
        {/*</div>*/}
        {/*<Card className="card-box mb-4">*/}
        {/*  <div className="card-header-alt p-4">*/}
        {/*    <h6 className="font-weight-bold font-size-lg mb-1 text-black">*/}
        {/*      Plan d'action de cette semaine*/}
        {/*    </h6>*/}
        {/*    /!*<p className="text-black-50 mb-0">*!/*/}
        {/*    /!*  Reports for what we sold this week.*!/*/}
        {/*    /!*</p>*!/*/}
        {/*  </div>*/}

        <div className="table-responsive">
          <table className="table table-borderless text-nowrap mb-0">
            <thead>
            <tr>
              <th>Nom Projet</th>
              <th className="text-left">Tache</th>
              <th className="text-center">Responsable</th>
              <th className="text-left">Status</th>
              <th className="text-center">Deadline</th>
            </tr>
            </thead>
            <tbody>
            {rows.map(row => (
              <tr key={row.id}>
                <td>
                  <Link component={RouterLink} to={`/project/${row.sprint.project.id}`}>
                    {getDisplayString(row.sprint.project.designation, 20)}
                  </Link>
                </td>
                <td className="text-left">
                  {getDisplayString(row.description, 20)}
                </td>
                <td className="text-center">
                  {row.user && row.user.username &&
                  <div className="d-flex align-items-center">
                    <Avatar
                      src={row.user.userProfile && row.user.userProfile.photo && row.user.userProfile.photo}
                      className="mr-2"/>
                    <div>
                      <a
                        href="#/"
                        onClick={e => e.preventDefault()}
                        className="font-weight-bold text-black"
                      >
                        {row.user.username}
                      </a>
                    </div>
                  </div>
                  }
                </td>
                <td className="text-left">
                  <span className={`badge badge-${getColorTask(row.task)}`}>{row.status}</span>
                </td>
                <td className="text-center">
                  {moment(row.end_at).format('L')}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div className="card-footer py-3 text-center">
          <Button
            size="small"
            // variant="outlined"
            variant="contained"
            component={RouterLink}
            to="/task" color="primary">
            Voir tout
          </Button>
        </div>
      </Card>
    </Fragment>
  );
}
