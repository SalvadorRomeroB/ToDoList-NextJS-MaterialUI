import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles({
  position: {
    marginTop: 2
  },
  custBtn: {
    backgroundColor: "#66FCF1",
    "&:hover": {
      backgroundColor: "#66FCF1"
    }
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#45A29E",
    borderRadius: 15
  },
  input: {
    "&::placeholder": {
      color: "#C5C6C7",
      fontSize: 20
    },
    color: "white"
  },
  root: {
    width: 180,
    "&$cssFocused $notchedOutline": {
      borderColor: "#66FCF1"
    },
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: "#66FCF1"
    }
  },
  cssFocused: {}
});

const Capture = props => {
  const classes = useStyles();

  const [text, setText] = useState("");

  const addTask = () => {
    if (text != "") {
      let task = {
        type: "ADD_TASK",
        payload: {
          message: text,
          completed: false,
          hidden: false
        }
      };
      props.dispatch(task);
      setText("");
    }
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <TextField
            placeholder="What?"
            margin="normal"
            variant="outlined"
            onChange={e => setText(e.target.value)}
            className={classes.position}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
                input: classes.input,
                focused: classes.cssFocused,
                root: classes.root
              }
            }}
            value={text}
            onKeyPress={e => {
              if (e.key === "Enter") addTask();
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Fab className={classes.custBtn} aria-label="add" onClick={addTask}>
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default Capture;
