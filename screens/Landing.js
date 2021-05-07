import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';
const Tab = createMaterialTopTabNavigator();

const Landing = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="tab1" component={Tab1} />
        <Tab.Screen name="tab2" component={Tab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Landing;
