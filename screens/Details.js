import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = props => {
  return (
    <View style={styles.container}>
      <Text>
        {props.route.params.value} {props.route.params.index}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  item: {
    padding: 10,
    borderBottomColor: 'black',
    borderWidth: 1,
  },
});
export default Details;
