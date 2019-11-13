import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    color: "#0B0C10",
    background: "#66FCF1",
    marginTop: 10,
    "&:hover": {
      backgroundColor: "#66FCF1"
    }
  }
});

const FilterBtns = props => {
  const classes = useStyles();

  const task_completed = () => {
    let completed = {
      type: "SHOW_COMPLETED"
    };
    props.dispatch(completed);
  };

  const showAll = () => {
    let all = {
      type: "SHOW_ALL"
    };
    props.dispatch(all);
  };

  return (
    <div>
      <Grid container spacing={0.5}>
        <Grid item xs></Grid>
        <Grid item xs={5}>
          <Button
            onClick={task_completed}
            classes={{
              root: classes.root
            }}
          >
            Completed
          </Button>
        </Grid>

        <Grid item xs={5}>
          <Button
            classes={{
              root: classes.root
            }}
            onClick={showAll}
          >
            Show All
          </Button>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
};

export default FilterBtns;
