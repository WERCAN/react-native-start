import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {IntroScreen, DetailScreen,ListScreen} from '../screens'

const Stack = createStackNavigator();

export const MainFlow=()=>{
  return(
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
  )
}