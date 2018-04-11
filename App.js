import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from './app/screens/Login';
import Wallpaper from './app/screens/Wallpaper';

export default class App extends Component {
  render() {
    return(
      <Wallpaper>
      <Login />
      </Wallpaper>
    )
  }
}
