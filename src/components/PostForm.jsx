import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  form: {
    padding: 15
  },
  textField: {
    paddingBottom: 15
  },
  buttonsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '& button': {
      marginRight: 5
    }
  }
});

export default function PostForm(props) {
  const {
    title: formTitle,
    status,
    onSubmit,
    onCancel
  } = props;

  const classes = useStyles();

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({
      userId,
      title,
      body
    });
  };

  return (
    <Paper>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h3">{formTitle}</Typography>
        <hr/>
        <TextField
          className={classes.textField}
          id="txt-post-userId"
          variant="outlined"
          label="User ID"
          fullWidth
          value={userId}
          onChange={e => setUserId(e.target.value)}
        />
        <TextField
          className={classes.textField}
          id="txt-post-title"
          variant="outlined"
          label="Title"
          fullWidth
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className={classes.textField}
          id="txt-post-body"
          variant="outlined"
          label="Body"
          fullWidth
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <div className={classes.buttonsContainer}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => onCancel()}
          >
            Cancel
        </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={status === 'in-progress'}
          >
            { status === 'in-progress' ? <CircularProgress size="0.875rem" /> : ''} Save
        </Button>
        </div>
      </form>
    </Paper>
  );
}
