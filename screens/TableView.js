import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const fakeData = new Array(50)
  .fill(undefined)
  .map((_, i) => ({value: 'value', index: i}));

const renderItem = ({item}, navigate) => {
  return (
    <TouchableOpacity style={styles.item} onPress={navigate}>
      <Text>
        {item.value} {item.index}
      </Text>
    </TouchableOpacity>
  );
};

const TableView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fakeData}
        renderItem={value =>
          renderItem(value, () => navigation.navigate('Details', value.item))
        }
        keyExtractor={(_, i) => i.toString()}
      />
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
export default TableView;
