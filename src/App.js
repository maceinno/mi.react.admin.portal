import React, { Component } from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import Dashboard from './Dashboard';
import PostIcon from '@material-ui/icons/Book';
import { PostList } from './Posts';


import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      
      <div>
        hi
        <Admin dashboard={Dashboard} dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
          <Resource name="posts" list={PostList}  edit={EditGuesser}  icon={PostIcon} />
        </Admin>
      </div>

    );
  }
}

export default App;