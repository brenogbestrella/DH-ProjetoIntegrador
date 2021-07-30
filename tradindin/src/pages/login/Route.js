import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import api from "../../Services/api"

import Header2 from '../../components/header2/Header2';
import Header from '../../components/header/Header';

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


  const Layout = login ? Header2 : Header;
  return (
    <Route
      {...rest}
      render={props => ( 
        <div style={{height: "100%"}}>
          <Layout />
          <Component {...props} />
        </div>
      )}
     
    />
  );
}