import React from 'react';
import { Route, Redirect } from 'react-router-dom';



export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const login = localStorage.getItem("token");

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