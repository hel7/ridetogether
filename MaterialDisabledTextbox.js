import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Font from 'expo-font';

function MaterialDisabledTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput
        placeholder={props.inputStyle || "Label"}
        style={styles.inputStyle}
      ></TextInput>
      <Icon
        name={props.iconStyle || "information-outline"}
        style={styles.iconStyle}
      ></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center"
  },
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    fontSize: 15,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 4
  },
  iconStyle: {
    color: "#384850",
    fontFamily: "System",
    fontSize: 24,
    paddingRight: 8,
    opacity: 0.7
  }
});

export default MaterialDisabledTextbox;
