import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
});
export default Details;
