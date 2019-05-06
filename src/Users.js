import React from 'react';
import {
  Filter,
  ReferenceInput,
  SelectInput,
  List,
  Datagrid,
  TextField,
  EmailField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  DisabledInput,
  Create,
  EditButton,
  LongTextInput,
  Responsive,
  SimpleList,
  CardActions,
  RefreshButton
} from 'react-admin';

const UserFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="q" alwaysOn />
      <ReferenceInput label="User" source="id" reference="users" allowEmpty>
          <SelectInput optionText="name" />
      </ReferenceInput>
  </Filter>
);

const ActionsRefresh = props => (
  <CardActions>
      <RefreshButton />
  </CardActions>
);

export const UserList = props => (
  <List title="List of Users" filters={<UserFilter />} {...props}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.name}
            secondaryText={record => `${record.email}`}
            tertiaryText={record => record.address.street}
        />
      }
      medium= {
        <Datagrid rowClick="edit">
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);
const Aside = () => (
  <div style={{ width: 200, margin: '1em' }}>
      <h1>Post details</h1>
      <p>
          Posts will only be published one an editor approves them
      </p>
  </div>
);
const UserName = ({ record }) => {
    return <span>Edit {record ? `${record.name}` : ''}</span>;
};
export const UserEdit = props => (
  <Edit aside={<Aside />} title={<UserName />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <LongTextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Edit>
);

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" label="Address" />
      <TextInput source="phone" />
      <TextInput source="website" />
      <TextInput source="company.name" label="Company" />
    </SimpleForm>
  </Create>
);