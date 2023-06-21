import React from "react";
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import MaterialRightIconTextbox from "./MaterialRightIconTextbox";
import MaterialRightIconTextbox2 from "./MaterialRightIconTextbox 2";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Untitled from "./Untitled";
import Untitled1 from "./Untitled1";
import Untitled2 from "./Untitled2";
import Untitled3 from "./Untitled3";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
      
      <Drawer.Navigator>
         <Drawer.Screen name="Головна" component={Untitled} />     
         <Drawer.Screen name="Авторизація" component={Untitled1} />
         <Drawer.Screen name="Регестрація" component={Untitled2} />
        <Drawer.Screen name="Профіль" component={Untitled3} />
   
        
      </Drawer.Navigator>
    );
  };

export default DrawerNavigator;