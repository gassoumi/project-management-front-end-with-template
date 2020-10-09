import React, {useEffect} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';

import {useForm, Controller} from "react-hook-form";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


const DialogTitle = withStyles(styles)((props) => {
  const {children, classes, onClose, ...other} = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


function NoteUpdate({
                      open, handleClose, note,
                      createNote, updateNote, isNew,
                    }) {


  const {register, handleSubmit, errors, watch, control} = useForm({
    mode: "onChange",
  });

  const statusInput = watch("ok", note.ok);

  const isDate = value => {
    return moment(value).isValid();
  };

  const onSubmit = data => {

    const newNote = {
      note: data.note,
      comment: data.comment,
      ok: data.ok,
      date: moment(data.date, "YYYY-MM-DDTHH:mm Z").toDate()
    };
    if (isNew) {
      createNote(newNote);
    } else {
      updateNote(note.id, newNote)
    }
  };


  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle className="bg-light" id="form-dialog-ajout-note">
        {isNew ? "Ajouter une " : "Modifier la "} story
      </DialogTitle>
      <form id="form-note" onSubmit={handleSubmit(onSubmit)} noValidate>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DialogContent dividers>
            {
              false && <TextField
                defaultValue={note.id || ""}
                disabled
                fullWidth
                name="id"
                inputRef={register}
                margin="dense"
                label="Id du Note"
                type="text"
              />
            }
            <TextField
              // variant="outlined"
              // size={"medium"}
              fullWidth
              name="note"
              defaultValue={note.note || ""}
              required
              inputRef={register({
                required: 'this field is required',
                minLength: {
                  value: 2,
                  message: 'Min length is 2',
                },
                maxLength: {
                  value: 60,
                  message: 'Max length is 60',
                },
              })}
              // autoFocus
              margin="dense"
              label="Story"
              autoComplete="disable"
              type="text"
              error={!!errors.note}
              helperText={errors.note && errors.note.message}
            />
            <TextField
              // size={"medium"}
              // variant="outlined"
              multiline
              rows={3}
              fullWidth
              defaultValue={note.comment || ""}
              name="comment"
              required
              inputRef={register}
              margin="dense"
              label="Commentaire"
              autoComplete="disable"
              type="text"
              error={!!errors.comment}
              helperText={errors.comment && errors.comment.message}
            />
            <Controller
              name="date"
              control={control}
              defaultValue={moment(note.date).format('YYYY-MM-DD') ||
              moment().format('YYYY-MM-DD')}
              rules={{
                required: 'this field is required',
                validate: {
                  date: value => isDate(value) || "Format de date non valide"
                }
              }}
              as={
                <KeyboardDatePicker
                  // size={"medium"}
                  // inputVariant="outlined"
                  clearLabel="vider"
                  cancelLabel="annuler"
                  clearable
                  fullWidth
                  required
                  error={!!errors.date}
                  helperText={errors.date && errors.date.message}
                  margin="normal"
                  label="Date à faire"
                  format="DD/MM/YYYY"
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />}
            />

            <FormControlLabel control={
              <Switch
                defaultChecked={note.ok}
                name="ok"
                inputRef={register}/>
            } label={statusInput ? "DONE" : "NOT DONE"}/>


          </DialogContent>
        </MuiPickersUtilsProvider>
        <DialogActions>
          <Button
            form="form-note"
            type="submit"
            // startIcon={<SaveIcon/>}
            variant="contained"
            color="primary"
          >
            Enregistrer
          </Button>
          <Button
            // startIcon={<CancelIcon/>}
            onClick={handleClose}
            variant="contained"
            color="secondary"
          >
            Annuler
          </Button>
        </DialogActions>
      </form>
    </Dialog>

  );
}


NoteUpdate.propTypes = {};


export default NoteUpdate;