import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Font } from 'expo-font';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import Untitled1 from "./Untitled1";
import Untitled2 from "./Untitled2";
import Untitled3 from "./Untitled3";
import Untitled4 from "./Untitled4";
import Untitled5 from "./Untitled5";
import CustomDrawerContent from "./CustomDrawerContent";
import Untitled6 from "./Untitled6";
import Map from "./Map";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Untitled(props) {
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'roboto-700': require('./fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./fonts/Roboto-Regular.ttf'),
      });
    }

    loadFonts();
  }, []);

  return (

    <><View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.imageStackRow}>
          <View style={styles.imageStack}>
            <Image
              source={require("./assets/images/Group_1.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.rideTogether}>RideTogether</Text>
          </View>
          <View style={styles.groupColumn}>
            <View style={styles.group}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled1")}
                style={styles.button}
              >
                <Text style={styles.увійти}>Увійти</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.group2}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled2")}
                style={styles.button1}
              >
                <Text style={styles.створитиАкаунт}>Створити акаунт</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
          IpsumLorem IpsumLorem IpsumLorem Ipsum
        </Text>
        <Image
          source={require("./assets/images/d.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <Text style={styles.loremIpsum2}>Lorem Ipsum</Text>
    </View><View style={styles.group}>
        <TouchableOpacity onPress={() => navigation.navigate("Untitled3")} style={styles.button}>
          <Text style={styles.увійти}>Увійти</Text>
        </TouchableOpacity>
      </View></>

  );
}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Untitled" component={Untitled} />
        <Stack.Screen name="Untitled1" component={Untitled1} />
        <Stack.Screen name="Untitled2" component={Untitled2} />
        <Stack.Screen name="Untitled3" component={DrawerRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Untitled4" component={DrawerRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Untitled5" component={DrawerRoutes} options={{ headerShown: false }} />
        <Stack.Screen name="Untitled6" component={Untitled6}  />
        <Stack.Screen name="Map" component={Map}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function DrawerRoutes() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Untitled3" >
      <Drawer.Screen name="Untitled3" component={Untitled3} />
      <Drawer.Screen name="Untitled4" component={Untitled4} />
      <Drawer.Screen name="Untitled5" component={Untitled5} />
    </Drawer.Navigator>
  );
}


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 360,
    height: 137,
    backgroundColor: "rgba(37,66,225,1)"
  },
  image: {
    top: 0,
    left: 0,
    width: 115,
    height: 98,
    position: "absolute"
  },
  rideTogether: {
    top: 37,
    left: 102,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 20
  },
  imageStack: {
    width: 238,
    height: 98
  },
  group: {
    width: 115,
    height: 35
  },
  button: {
    width: 115,
    height: 35,
    backgroundColor: "rgba(0,122,255,1)",
    borderRadius: 5
  },
  увійти: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 16,
    marginTop: 7,
    marginLeft: -1
  },
  group2: {
    width: 115,
    height: 35,
    marginTop: 14
  },
  button1: {
    width: 115,
    height: 35,
    backgroundColor: "rgba(0,122,255,1)",
    borderRadius: 5
  },
  створитиАкаунт: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    textAlign: "center",
    fontSize: 12,
    marginTop: 9,
    marginLeft: 2
  },
  groupColumn: {
    width: 115,
    marginTop: 13,
    marginBottom: 1
  },
  imageStackRow: {
    height: 98,
    flexDirection: "row",
    marginTop: 25,
    marginRight: 7
  },
  loremIpsum: {
    top: 0,
    left: 19,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 185,
    width: 336
  },
  image2: {
    top: 150,
    left: 30,
    width: 300,
    height: 300,
    position: "absolute"
  },
  loremIpsumStack: {
    width: 362,
    height: 595,
    marginTop: 78,
    marginLeft: -2
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 22,
    marginTop: -630,
    marginLeft: 17
  }
});



