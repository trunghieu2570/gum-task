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
import Login from './modules/auth/scenes/Login';
import Register from './modules/auth/scenes/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './Navigator';


const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="TaskList" component={TaskList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
export default App;
