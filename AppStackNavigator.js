import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/Home';
import ReceiverDetailsScreen  from '../screens/ReceiverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  itemDonateList : {
    screen : Home,
    navigationOptions:{
      headerShown : false
    }
  },
  ReceiverDetails : {
    screen : ReceiverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'itemDonateList'
  }
);