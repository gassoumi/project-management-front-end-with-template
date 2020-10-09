import React from 'react';
import PropTypes from 'prop-types';
import {
  InputAdornment,
  Button,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

AddNew.propTypes = {};

function AddNew({label, count, queryValue, handleInput, handleQuery, handleAdd, buttonLabel}) {
  return (
    <div className="d-block p-3 d-md-flex justify-content-between align-items-center text-center text-md-left">
      <div className="d-flex flex-md-row flex-column align-items-center">
        <div className="font-size-lg font-weight-bold">{label}</div>
        <div className="mx-3 d-none d-md-block">
          <div className="divider-v position-relative"/>
          <div className="divider-v position-relative"/>
        </div>
        <span className="text-black-50 font-size-md pr-3">
                    {count} au total
                  </span>
        <div>
          <TextField
            value={queryValue}
            onChange={handleInput}
            margin="dense"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              )
            }}
          />
          <Button variant="contained" color="primary" onClick={handleQuery} className="m-2 ml-3">
            Rechercher
          </Button>
        </div>
      </div>
      <div className="d-block d-md-flex align-items-center">
        <Button
          onClick={handleAdd}
          size="small"
          variant="outlined"
          color="primary"
          className="font-weight-bold px-3">
          <span className="btn-wrapper--icon">
            <FontAwesomeIcon
              icon={['fas', 'plus-circle']}
              className="text-success"
            />
          </span>
          <span className="btn-wrapper--label"> {buttonLabel}</span>

        </Button>
      </div>
    </div>

  );
}

export default AddNew;
