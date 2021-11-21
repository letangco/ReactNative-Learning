/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';
import { Styles } from './src/common';

const App: () => Node = () => {
  const [isActive, setIsActive] = useState(true);
  return (
    <View>
      <View
        style={{
          width: 200,
          height: 100,
          backgroundColor: 'red',
        }}
      />
      <View style={Styles.recTangle} />
      <View
        style={[
          styles.header,
          // styles.backgroundRed,
          {borderColor: 'black'},
          isActive ? styles.backgroundRed : styles.backgroundGreen,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 100,
  },
  backgroundRed: {
    backgroundColor: 'yellow',
  },
  backgroundGreen: {
    backgroundColor: 'green',
  },
});

export default App;
