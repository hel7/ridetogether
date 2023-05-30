import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export function CupertinoButtonInfo2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.створитиАкаунт}>Створити акаунт</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  створитиАкаунт: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
  }
});

export default CupertinoButtonInfo2;
