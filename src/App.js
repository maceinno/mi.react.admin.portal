import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import Dashboard from './Dashboard';

import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      
      <div>
        hi
        <Admin dashboard={Dashboard} dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
        </Admin>
      </div>
      
    );
  }
}

export default App;