import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyExchangesScreen from '../screens/MyExchangesScreen';
import NotificationScreen from '../screen/NotificationScreen';

export const AppDrawerNavigator = createDrawerNavigator({

  Home : {
    screen : AppTabNavigator
    },
    MyExchanges : {
      screen : MyExchangesScreen
    },
    Notification : {
      screen : NotificationScreen
    },
  Setting : {
    screen : SettingScreen
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })