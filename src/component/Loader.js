import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
// import Spinner from 'react-native-loading-spinner-overlay';

// https://www.npmjs.com/package/react-native-loading-spinner-overlay

const Loader = () => (
  <View style={[styles.container, styles.horizontal]}>
 
    <ActivityIndicator size="large" />
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    // backgroundColor:"transparent"
  }
});

export default Loader;