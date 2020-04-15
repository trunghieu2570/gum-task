/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';
import Home from './modules/home/scenes/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './modules/tasklist/scenes/TaskList';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TaskList/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#f0f',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#111',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: '#110',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
