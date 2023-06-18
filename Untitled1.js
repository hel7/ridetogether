import React, { useEffect } from "react";
import { Font } from 'expo-font';
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialDisabledTextbox from "./MaterialDisabledTextbox";
import MaterialRightIconTextbox from "./MaterialRightIconTextbox";


function Untitled1(props) {
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
    <View style={styles.container}> 
      <View style={styles.image1Row}>
        <Image
          source={require("./assets/images/Group_1.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Text style={styles.rideTogether1}>RideTogether</Text>
      </View>
      <TouchableOpacity style={styles.button}><Text style={styles.увійти}>Увійти</Text></TouchableOpacity>
<TouchableOpacity style={styles.button3}><Text style={styles.увійтиЧерезGoogle}>Увійти через Google</Text></TouchableOpacity>
<TouchableOpacity style={styles.button2}><Text style={styles.зареєструватися}>Зареєструватися</Text></TouchableOpacity>

      <Text style={styles.або}>Або</Text>
      <MaterialDisabledTextbox
        iconStyleName="information-outline"
        inputStyle="Логін:"
        iconStyle="account-card-details"

        style={styles.materialDisabledTextbox}
      ></MaterialDisabledTextbox>
      <MaterialRightIconTextbox
        inputStyle="Пароль:"
    
        style={styles.materialRightIconTextbox}
      ></MaterialRightIconTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  увійти: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    marginTop: 7,
    marginLeft: 94
  },
  увійтиЧерезGoogle: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    textAlign: "left",
    marginTop: 7,
    marginLeft: 54
  },
  зареєструватися: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    marginTop: 7,
    marginLeft: 66
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(37,66,225,1)",
   
  },
  image1: {
    width: 115,
    height: 98
  },
  rideTogether1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: 35
  },
  image1Row: {
    height: 98,
    flexDirection: "row",
    marginTop: 23,
    marginRight: 113
  },
  button: {
    width: 239,
    height: 30,
    backgroundColor: "rgba(85,253,254,1)",
    borderRadius: 5,
    marginTop: 108,
    marginLeft: 58
  },
  button3: {
    width: 239,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 58
  },
  rect3: {
    width: 239,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 58
  },
  button2: {
    width: 235,
    height: 30,
    backgroundColor: "rgba(85,253,254,1)",
    borderRadius: 5,
    marginTop: 44,
    marginLeft: 58
  },
  або: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: -66,
    marginLeft: 155
  },
  materialDisabledTextbox: {
    height: 30,
    width: 239,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 5,
    marginTop: -185,
    marginLeft: 58
  },
  materialRightIconTextbox: {
    height: 30,
    width: 239,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 58
  }
});

export default Untitled1;
