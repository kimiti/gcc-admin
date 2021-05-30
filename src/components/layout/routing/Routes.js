import React from "react";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import UploadVideo from "../../uploadVideo/UploadVideo";

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/uploadvideo" component={UploadVideo} />
      </Switch>
    </Container>
  );
};

export default Routes;
