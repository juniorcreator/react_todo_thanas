import React, { Component } from 'react';
import Counters from './containers/Counters/Counters';
import News from './containers/News/News';
import Images from './containers/Images/Images';
import Register from './containers/Register/Register';
import Todo from './containers/Todo/Todo';
import Login from './containers/Login/Login';
import Layout from './hoc/Layout';
import Nav from './containers/Nav/Nav';
import Users from './containers/Users/Users'
import Notfound from './containers/Notfound/Notfound';
import EditUser from './containers/EditUser/EditUser';
import Homepage from './containers/Homepage/Homepage';
import {Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component {
  state = {
    nav: [
      {to: '/home', label: 'Home', id: 1, exact: false},
      {to: '/counters', label: 'Counters' , id: 2, exact: false},
      {to: '/images', label: 'Images' , id: 3, exact: false},
      {to: '/news', label: 'News', id: 4, exact: false},
      {to: '/registration', label: 'Registration', id: 5, exact: false},
      {to: '/login', label: 'Login', id: 6, exact: false},
      {to: '/todos', label: 'Todos', id: 7, exact: false},
      {to: '/createtodo', label: 'Create todo', id: 8, exact: false},
      {to: '/users', label: 'Users', id: 9, exact: false},
    ],
  };

  render() {
    return (
      <Layout>
        <Nav nav={this.state.nav} />
        <Switch>
          <Route path='/counters' component={Counters} />
          <Route path='/news' component={News} />
          <Route path='/images' component={Images} />
          <Route path='/registration' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/todos' component={Todo} />
          <Route exact path='/users' component={Users} />
          <Route path='/home' component={Homepage} />
          <Route path='/users/:id' component={EditUser} />
          <Route  component={Notfound} />
        </Switch>
      </Layout>
    );
  }
}

export default App;





















{
  "name": "mix",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "npm run development -- --watch",
    "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "browser-sync": "^2.26.7",
    "browser-sync-webpack-plugin": "^2.0.1",
    "jquery": "^3.4.1",
    "laravel-mix": "^4.1.2",
    "resolve-url-loader": "^3.1.0",
    "sass": "^1.22.4",
    "sass-loader": "^7.1.0",
    "vue-template-compiler": "^2.6.10",
    "webpack-dev-server": "^3.7.2"
  }
}
