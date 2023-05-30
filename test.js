import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const CustomDrawerContent = ({ navigation }) => {
    const navigateToScreen = (screenName) => {
      navigation.navigate(screenName);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigateToScreen('Home')}>
          <Text style={styles.drawerItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
          <Text style={styles.drawerItem}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    drawerItem: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 20,
    },
  });
  
  // Modify the App component to include the custom drawer content
  const App = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  export default createAppContainer(App);