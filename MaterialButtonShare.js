import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import Untitled6 from "./Untitled6";
function MaterialButtonShare(props) {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Створення поїздки");
  };

  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={handleButtonPress}
    >
      <Icon name="plus" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(187,27,247,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40
  },
  icon: {
    color: "#fff",
    fontSize: 40,
    alignSelf: "center"
  }
});

export default MaterialButtonShare;
