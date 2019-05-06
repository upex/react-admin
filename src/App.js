import React, { Component } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from './Users';
import UserIcon from '@material-ui/icons/Group';
import authProvider from './authProvider';
import NotFound from './NotFound';
import MyLayout from './MyLayout';
import customRoutes from './customRoutes';

const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
      <Admin
      appLayout={MyLayout}
      dataProvider={dataProvider}
      catchAll={NotFound}
      customRoutes={customRoutes}
      >
        <Resource
          icon={UserIcon}
          name="Users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
    );
  }
}

export default App;
