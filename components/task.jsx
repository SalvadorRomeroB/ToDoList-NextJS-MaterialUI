import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    margin: 2,
    background: "#1F2833"
  },
  noOverflw: {
    height: 400
  }
}));

const Task = props => {
  const classes = useStyles();

  const toggle = () => {
    props.dispatch({ type: "TOGGLE_TASK", id: props.id });
  };

  return (
    <div className={props.hidden ? "hide" : "task"}>
      <Paper className={classes.root}>
        <Checkbox
          value={props.completed}
          labelStyle={{ color: "#0B0C10" }}
          iconStyle={{ fill: "white" }}
          inputStyle={{ color: "white" }}
          style={{ color: "white" }}
          onChange={toggle}
        />
        <span className={props.completed ? "marked" : ""}>
          <span className="content">{props.text}</span>
        </span>
      </Paper>

      <style jsx>
        {`
          .hide {
            display: none;
          }
          .task {
            font-size: 20px;
          }

          .marked {
            text-decoration: line-through;
          }
          .content {
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Task;
