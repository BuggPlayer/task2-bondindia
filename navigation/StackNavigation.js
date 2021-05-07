import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Task1 from '../screens/Task1';
import NextContainer from '../screens/NextContainer';
import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';

const Stack = createStackNavigator();

export const UserPortal = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="userpotal" component={Tab1} />
      <Stack.Screen name="Container" component={Tab2} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <UserPortal />
    </NavigationContainer>
  );
};

export default StackNavigation;
