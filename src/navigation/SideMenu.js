import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {CreditsScreen,ThemeScreen} from '../screens';
import {MainFlow} from './MainFlow'


const Drawer = createDrawerNavigator();

export const SideMenu=()=>{
  return ( 
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainFlow} />
        <Drawer.Screen name="Credits" component={CreditsScreen} />
        <Drawer.Screen name="Themes" component={ThemeScreen} />
      </Drawer.Navigator>
   
  );
}