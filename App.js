import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {IntroScreen, DetailScreen,ListScreen,CreditsScreen,ThemeScreen} from './src/screens'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainFlow=()=>{
  return(
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
  )
}

const App=()=>{
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainFlow} />
        <Drawer.Screen name="Credits" component={CreditsScreen} />
        <Drawer.Screen name="Themes" component={ThemeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
