import React, { Component } from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';

import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      <div>
        hi
        <Admin dataProvider={dataProvider}>
          <Resource name="users" list={ListGuesser} />
        </Admin>
      </div>
    );
  }
}

export default App;