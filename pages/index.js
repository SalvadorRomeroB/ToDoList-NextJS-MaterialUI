import { useReducer } from "react";
import Task from "../components/task";
import Capture from "../components/capture";
import reducer from "../store/reducer";
import FilterBtns from "../components/filterBtns";
import Layout from "../components/layout";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  noOverflw: {
    height: 400
  }
}));

const Home = () => {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, []);
  return (
    <Layout>
      <div>
        <div>
          <Capture dispatch={dispatch} />
          <div className="fixed">
            {state.map(t => (
              <Task
                key={t.id}
                id={t.id}
                text={t.message}
                completed={t.completed}
                hidden={t.hidden}
                dispatch={dispatch}
              />
            ))}
          </div>

          <FilterBtns dispatch={dispatch} />
        </div>
        <style jsx>
          {`
            .fixed {
              overflow: auto;
              height: 350px;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Home;
