import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import tabBar from './TopTabBar';
import Details from './Details';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator tabBar={tabBar}>
        <Tab.Screen name="Screen1" component={Details} />
        <Tab.Screen name="Screen2" component={Details} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
