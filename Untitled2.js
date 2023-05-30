import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import MaterialRightIconTextbox from "./MaterialRightIconTextbox";

function Untitled2(props) {
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
  <><MaterialRightIconTextbox
        inputStyle="Логін:"

        style={styles.materialRightIconTextbox1}
    ></MaterialRightIconTextbox><MaterialRightIconTextbox
        inputStyle="Email:"

        style={styles.materialRightIconTextbox}
    ></MaterialRightIconTextbox><MaterialRightIconTextbox
        inputStyle="Дата народження:"

        style={styles.materialRightIconTextbox}
    ></MaterialRightIconTextbox><MaterialRightIconTextbox
        inputStyle="Пароль:"

        style={styles.materialRightIconTextbox}
    ></MaterialRightIconTextbox><MaterialRightIconTextbox
        inputStyle="Повторити пароль:"

        style={styles.materialRightIconTextbox}
        
    >
          
        </MaterialRightIconTextbox></>
    <View style={styles.container}>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.увійтичерезGoogle1}>Зареєструватися</Text>
      </TouchableOpacity>
 


      <View style={styles.container}>
        
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.зареєструватися2}>Зареєструватися через Google</Text>
      </TouchableOpacity>

      <Text style={styles.або}>Або</Text>
    </View>
    </View>
    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        width: 235,
        height: 30,
        borderRadius: 5,
        
        
      },
      button3: {
        width: 235,
        height: 30,
        backgroundColor: "rgba(85,253,254,1)",
        borderRadius: 5,
        marginTop: 40,
        marginLeft: 58
      },
      зареєструватися2: {
        fontFamily: "roboto-regular",
        color: "rgba(0,0,0,1)",
        marginTop: 6,
        marginLeft: 15
      },
    container: {
        width: 235,
        height: 30,
        borderRadius: 5,

      },
      button2: {
        width: 235,
        height: 30,
        backgroundColor: "#E6E6E6",
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 58
      },
      увійтичерезGoogle1: {
        fontFamily: "roboto-regular",
        color: "rgba(0,0,0,1)",
        textAlign: "left",
        marginTop: 6,
        marginLeft: 62
      },
    container: {
        flex: 1,
        backgroundColor: "rgba(37,66,225,1)"
      },
      materialRightIconTextbox1: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 5,
        marginTop: 50,
        marginLeft: 58
      },
  materialRightIconTextbox: {
    height: 30,
    width: 239,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 5,
    marginTop: 15,
    marginLeft: 58
  },
  image1Row: {
    height: 98,
    flexDirection: "row",
    marginTop: 23,
    marginRight: 113
  },
  image1: {
    width: 170,
    height: 127
  },
  image1: {
    width: 170,
    height: 127
  },
  або: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
    marginTop: -66,
    marginLeft: 155
  },
  rideTogether1: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: -23,
    marginTop: 36
  },
});

export default Untitled2;
