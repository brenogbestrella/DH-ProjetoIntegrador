import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import api from "../Services/api"



export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const login = localStorage.getItem("token");
  api.defaults.headers.Authorization = `bearer ${login}`

  if (!login && isPrivate) {
    return <Redirect to="/login" />;
  }


  return (
    <Route
      {...rest}
      render={props => (
          <Component {...props} />
      )}
    />
  );
}