import React from 'react';
import SplashScreen from './SplashScreen';
import Login from './Login';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Splash',
    swipeEnabled: false,
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);