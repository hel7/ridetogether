import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import MaterialRightIconTextbox from "./MaterialRightIconTextbox";
import MaterialRightIconTextbox2 from "./MaterialRightIconTextbox 2";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Untitled1 from "./Untitled1";

import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@profile_image';

const Drawer = createDrawerNavigator();

function Untitled3(props) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    try {
      const storedImage = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedImage) {
        setImage(storedImage);
      }
    } catch (error) {
      console.log('Error loading image from storage:', error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      saveImage(result.uri);
    }
  };
  
  const saveImage = async (uri) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, uri);
      setImage(uri);
    } catch (error) {
      console.log('Error saving image to storage:', error);
    }
  };
  
  
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <View style={styles.rect1}>
                <View style={styles.image1StackStackRow}>
                    <View style={styles.image1StackStack}>
                        <View style={styles.image1Stack}>
                            <Image
                                source={require("./assets/images/Group_1.png")}
                                resizeMode="contain"
                                style={styles.image1}
                            ></Image>
                            <Text style={styles.rideTogether1}>RideTogether</Text>
                        </View>
                        <Text style={styles.loremIpsum5}>
                            Гаряча лінія:{"\n"}ХХХ-ХХХ-ХХХ-ХХХ
                        </Text>
                    </View>
                    <View style={styles.image3Column}>
                        <Image
                            source={require("./assets/images/w450h4001385925286Star.png")}
                            resizeMode="contain"
                            style={styles.image3}
                        ></Image>
                        
                        <Image
    source={{ uri: image }}
    resizeMode="contain"
    style={styles.image4}
  />
                       
                    </View>
                    <View style={styles.loremIpsum4Column}>
                        <Text style={styles.loremIpsum4}>3.5</Text>

                    </View>
                </View>
            </View>
     
            <Text style={styles.профіль}>Профіль</Text>
            {image && (
  <Image
    source={{ uri: image }}
    resizeMode="contain"
    style={styles.image2}
  />
)}

<View style={styles.group}>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button title="Змінити аватар" onPress={pickImage} />
  </View>
</View>

      
     
  


            <MaterialRightIconTextbox2
                inputStyle=" Логін:"
                style={styles.materialRightIconTextbox1}
            ></MaterialRightIconTextbox2>
            <MaterialRightIconTextbox2
                inputStyle=" Поштова скриня:"
                style={styles.materialRightIconTextbox2}
            ></MaterialRightIconTextbox2>
            <MaterialRightIconTextbox2
                iconStyleName="eye"
                inputStyle=" Номер телнфону:"
                style={styles.materialRightIconTextbox3}
            ></MaterialRightIconTextbox2>
            <MaterialRightIconTextbox
                inputStyle="Пароль:"
                style={styles.materialRightIconTextbox5}
            ></MaterialRightIconTextbox>
            <MaterialRightIconTextbox2
                inputStyle="Дата народження:"
                style={styles.materialRightIconTextbox4}
            ></MaterialRightIconTextbox2>
            <View style={styles.group1}>
                <TouchableOpacity style={styles.button}>

                </TouchableOpacity>
            </View>
            <MaterialRightIconTextbox2
                inputStyle=" Контактний телефон 1:"
                style={styles.materialRightIconTextbox6}
            ></MaterialRightIconTextbox2>
            <MaterialRightIconTextbox2
                iconStyleName="eye"
                inputStyle=" Контактний телефон 2:"
                style={styles.materialRightIconTextbox7}
            ></MaterialRightIconTextbox2>
            <View style={styles.group2}>
               

            </View>
             <TouchableOpacity style={styles.button}>
            <View style={styles.rect5Row}>
                <View style={styles.rect5}>
                    <Text style={styles.зберегти}>Зберегти</Text>
                </View>

            </View></TouchableOpacity>
            <Text style={styles.loremIpsum}>Контактна інформація</Text>
            <View style={styles.rect7}></View>


          


        </ScrollView>

        
    );
}









export default Untitled3;


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    rect1: {
        width: 394,
        height: 110,
        backgroundColor: "rgba(37,66,225,1)",
        alignSelf: "center",
    },
    image1: {
                width: 115,
        height: 100,
        position: "absolute",
        top: -21,
        marginLeft: 3
        
    },
    rideTogether1: {
        top: -4,
        height: 50,
        width: 137,
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 23,
        marginTop: 13,
        marginLeft: 101
    },
    image1Stack: {
        width: 214,
        height: 98,
        marginTop: 0,
        marginLeft: 0,
    },
    профіль: {
        fontFamily: "roboto-regular",
        color: "#121212",
        textAlign: "center",
        fontSize: 35,
        marginTop: 10,
        marginLeft: 0,
    },
    image2: {
        width: 156,
        height: 156,
        borderWidth: 1,
        borderColor: "#000000",
        marginTop: 9,
        marginLeft: 0,
        borderRadius: 78, // Половина ширины (или высоты) картинки
        overflow: 'hidden', // Скрыть контент, выходящий за пределы границы
    },
    group: {
        width: 140,
        height: 35,
        marginTop: 10,
        marginLeft: 0,
    },
    rect2: {
        width: 107,
        height: 22,
        backgroundColor: "rgba(255,255,255,1)",

    },
    змінитиАватар: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 2,
        marginLeft: 0,
    },
    materialRightIconTextbox1: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: 17,
        marginLeft: 0,
    },
    materialRightIconTextbox2: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: 14,
        marginLeft: 0,
    },
    materialRightIconTextbox3: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: 64,
        marginLeft: 0,
    },
    materialRightIconTextbox5: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: 20,
        marginLeft: 0,
    },
    materialRightIconTextbox4: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: -127,
        marginLeft: 0,
    },
    group1: {
        width: 107,
        height: 22,
        marginTop: 107,
        marginLeft: 0,
    },
    rect3: {
        width: 107,
        height: 22,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: -5,


    },
    змінитиаватар1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 2,
        marginLeft: 0,
    },
    materialRightIconTextbox6: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: 127,
        marginLeft: 0,
    },
    materialRightIconTextbox7: {
        height: 30,
        width: 239,
        backgroundColor: "rgba(230, 230, 230,1)",
        borderRadius: 8,
        marginTop: -80,
        marginLeft: 0,
    },
    group2: {
        width: 107,
        height: 22,
        marginTop: 59,
        marginLeft: 0,
    },
    rect4: {
        width: 107,
        height: 22,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: -5,
    },
    змінитиаватар2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 2,
        marginLeft: 3,
    },
    rect5: {
        width: 92,
        height: 29,
        backgroundColor: "rgba(85,253,254,1)",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: "#000000",
        marginTop: -30
    },
    rect6: {
        width: 92,
        height: 29,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 0.5,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 51,
        marginTop: -30
    },
    rect5Row: {
        height: 29,
        flexDirection: "row",
        marginTop: 50,
        marginLeft: 0,
        marginRight: 0,
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 28,
        height: 150,
        width: 239,
        marginTop: -280,
        marginLeft: 0,
        textAlign: "center",
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    rect7: {
        backgroundColor: "rgba(255,255,255,1)",
        width: 303,
        height: 30,
        marginTop: 100,
    },
    button2: {
        width: 107,
        height: 18,

    },
    button1: {
        width: 107,
        height: 18,
        marginTop: 92,
        marginLeft: 128
    },
    зберегти: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 5,
        marginLeft: 15,
    },
    loremIpsum5: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 19,
        width: 79,
        fontSize: 8,
        textAlign: "center",
        marginTop: -32,
        marginLeft: 246,
    },
    image3: {
        width: 30,
        height: 30,
        marginLeft: 45,
        borderRadius: 78, // Половина ширины (или высоты) картинки
        overflow: 'hidden', // Скрыть контент, выходящий за пределы границы
        top: 0,
        left: 9

    },
    image3Column: {
        width: 49,
        marginLeft: 6,

    },
    loremIpsum4: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        height: 23,
        left: 34


    },
    container2: {
        width: 25,
        height: 23,
        marginLeft: 290,

    },
    image1StackStack: {
        width: 253,
        height: 90
    },
    image1StackStackRow: {
        height: 94,
        flexDirection: "row",
        marginTop: 21
    },
    image4: {
        width: 55,
        height: 55,
        marginTop: 2,
        marginLeft: 61,
        borderRadius: 100, 
        borderWidth: 2,
        borderColor: "#000000",
    },
    loremIpsum4Column: {
        width: 52,
        marginTop: 3,

    },
    логін: {
        fontFamily: "roboto-regular",
        color: "rgba(1,255,255,1)",
        height: 18,
        width: 49,
        marginLeft: 295,
        marginTop: -25
    },


});
