import React from "react";
import Login from "./Login";
import TodoList from "./TodoList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SignUp from "./Signup";

function AppRouter() {
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        ShinDongA, {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/" exact>
              <TodoList />
            </Route>
          </Switch>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Router>
    </div>
  );
}

export default AppRouter;
