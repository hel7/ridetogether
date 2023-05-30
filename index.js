import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CupertinoButtonInfo1 from "./components/CupertinoButtonInfo1";

function Index(props) {
  return (
    <View style={styles.container}>
      <CupertinoButtonInfo1
        style={styles.cupertinoButtonInfo1}
      ></CupertinoButtonInfo1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 92,
    height: 27
  },
  cupertinoButtonInfo1: {
    height: 27,
    width: 92
  }
});

export default Index;
