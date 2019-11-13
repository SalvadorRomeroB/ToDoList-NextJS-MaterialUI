import Head from "next/head";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#0B0C10",
    borderRadius: 15,
    color: "white",
    maxHeight: 1000,
    height: 600,
    marginTop: 50
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Head>
        <title> My Todo List</title>
      </Head>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h2" align="center">
            My To Do's
          </Typography>
        </Grid>
        <Grid item xs></Grid>
        <Grid item xs={8}>
          {props.children}
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Container>
  );
};

export default Layout;
