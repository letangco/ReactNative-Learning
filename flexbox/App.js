/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet, View} from 'react-native';

const App: () => Node = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <View style={styles.topLeftOne}></View>
          <View style={styles.topLeftTwo}></View>
        </View>
        <View style={styles.topRight}></View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomOne}></View>
        <View style={styles.bottomTwo}></View>
        <View style={styles.bottomThree}>
          <View style={styles.bottomRightOne}></View>
          <View style={styles.bottomRightTwo}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  top: {
    flexDirection: 'row',
    flex: 7,
    backgroundColor: 'red',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    flex: 3,
  },
  bottomOne: {
    flex: 3,
    borderWidth: 3,
    borderColor: 'black',
  },
  bottomTwo: {
    flex: 6,
    borderWidth: 3,
    borderColor: 'black',
  },
  bottomThree: {
    flexDirection: 'column',
    flex: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  bottomRightOne: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
  },
  bottomRightTwo: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
  },
  topLeft: {
    flex: 2,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  topRight: {
    flex: 5,
    borderWidth: 3,
    borderColor: 'black',
  },
  topLeftOne: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'black',
  },
  topLeftTwo: {
    flex: 3,
    borderWidth: 3,
    borderColor: 'black',
  },
});

export default App;
