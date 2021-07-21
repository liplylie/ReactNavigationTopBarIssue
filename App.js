import React from 'react';
import {SafeAreaView} from 'react-native';

import TabNav from './screens/TabNav';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TabNav />
    </SafeAreaView>
  );
};

export default App;
