import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import Home from './Home';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Other"
          children={() => (
            <View>
              <Text>Other</Text>
            </View>
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNav;
