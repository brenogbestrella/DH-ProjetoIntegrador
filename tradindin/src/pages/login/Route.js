import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import api from "../../Services/api"

// import AuthLayout from '../components/header/Header';
// import DefaultLayout from '../components/header2/Header2';

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


  // const Layout = login ? DefaultLayout : AuthLayout;

  // return (
  //   <Route
  //     {...rest}
  //     render={props => (
  //       <Layout>
  //         <Component {...props} /> 
  //       </Layout> 
        
  //     )}
     
  //   />
  // );



  return (
    <Route
      {...rest}
      render={props => (
          <Component {...props} />
      )}
    />
  );
}