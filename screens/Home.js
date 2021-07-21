import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import tabBar from './TopTabBar';
import TableView from './TableView';
import Details from './Details';

const Tab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

const Tables = () => {
  return (
    <Tab.Navigator tabBar={tabBar}>
      <Tab.Screen name="Screen1" component={TableView} />
      <Tab.Screen name="Screen2" component={TableView} />
    </Tab.Navigator>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Tables" component={Tables} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
