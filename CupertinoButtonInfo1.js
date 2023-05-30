import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



function CupertinoButtonInfo1({ onPress, style }) {
  return (
    
    <TouchableOpacity onPress={() => navigation.navigate('Untitled1')}>
  

      
  <Text style={styles.caption}>Увійти</Text>


 </TouchableOpacity>
  );


}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
  name="Home"
  component={(props) => <Untitled {...props} navigation={props.navigation} />}
  options={{ headerShown: false }}
/>

        <Stack.Screen name="Details" component={Untitled1} />
      </Stack.Navigator>
    </NavigationContainer>
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
  caption: {
    color: "#fff",
    fontSize: 17
  }
});

export default CupertinoButtonInfo1;
