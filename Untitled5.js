import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Animated, ScrollView } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonShare from "./MaterialButtonShare";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const STORAGE_KEY = '@profile_image';

const Untitled5 = (props) => {
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
    <View style={styles.container}>
      <ScrollView>

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





            <View style={styles.rect21}>
                <View style={styles.початковеМісцеRow}>
                    <Text style={styles.початковеМісце}>Початкове місце:</Text>
                    <View style={styles.rect31}></View>
                    <TouchableOpacity style={styles.button4}>
                        <View style={styles.rect61}>
                            <FeatherIcon name="map-pin" style={styles.icon}></FeatherIcon>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.кінцевеМісцеRow}>
                    <Text style={styles.кінцевеМісце}>Кінцеве місце:</Text>
                    <View style={styles.rect51}></View>
                    <TouchableOpacity style={styles.button3}>
                        <View style={styles.rect71}>
                            <FeatherIcon name="map-pin" style={styles.icon1}></FeatherIcon>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.датаПодорожіRow}>
                    <Text style={styles.датаПодорожі}>Дата подорожі:</Text>
                    <View style={styles.rect41}></View>
                    <TouchableOpacity style={styles.button2}>
                        <View style={styles.rect81}>
                            <EntypoIcon name="calendar" style={styles.icon2}></EntypoIcon>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.button5}>
                    <View style={styles.rect10}>
                        <Text style={styles.пошук}>Пошук</Text>
                    </View>
                </TouchableOpacity>
            </View>



            <View style={styles.rect11}>

            </View>
            <View style={styles.rect7}></View>
            </ScrollView>
            
            <View style={{position:'absolute',bottom:50, right:15,  width: 68, borderRadius: 100,    height: 68,alignSelf:'flex-end'}}>
            <MaterialButtonShare
        style={styles.materialButtonShare}
      ></MaterialButtonShare>



    </View>

    </View>


); 
};



export default Untitled5;
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },

    buttonContainer: {
        position: 'absolute',
        bottom: 20, // Adjust the position as needed
        alignSelf: 'center',
        zIndex: 999, // Set a high z-index to make sure the button is above other elements
      },
    rect7: {
        backgroundColor: "rgba(255,255,255,1)",
        width: 303,
        height: 30,
       
    },
    пошук: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 2,
        marginLeft: 10
    },
    rect10: {
        width: 65,
        height: 25,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        left: 22
    },
    icon2: {
        color: "rgba(0,0,0,1)",
        fontSize: 15,
        height: 16,
        width: 15,
        marginTop: 7,
        marginLeft: 7
    },
    rect81: {
        width: 30,
        height: 30,
        backgroundColor: "#E6E6E6",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000000",
        left: 10,
    },
    rect41: {
        width: 156,
        height: 16,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#000000",
        marginLeft: 23,
        marginTop: 6
    },
    датаПодорожі: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 14,
        marginTop: 5
    },
    датаПодорожіRow: {
        height: 30,
        flexDirection: "row",
        marginTop: 3,
        marginLeft: 8,
        marginRight: 18
    },
    icon1: {
        color: "rgba(0,0,0,1)",
        fontSize: 15,
        height: 15,
        width: 15,
        marginTop: 7,
        marginLeft: 7
    },
    rect71: {
        width: 30,
        height: 30,
        backgroundColor: "#E6E6E6",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000000",
        left: 10,
    },
    rect51: {
        width: 156,
        height: 16,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#000000",
        marginLeft: 29,
        marginTop: 7
    },
    кінцевеМісце: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 14,
        marginTop: 5
    },
    кінцевеМісцеRow: {
        height: 30,
        flexDirection: "row",
        marginTop: 3,
        marginLeft: 8,
        marginRight: 18
    },
    icon: {
        color: "rgba(0,0,0,1)",
        fontSize: 15,
        height: 15,
        width: 15,
        marginTop: 7,
        marginLeft: 7
    },
    rect61: {
        width: 30,
        height: 30,
        backgroundColor: "#E6E6E6",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#000000",
        left : 10
    },
    rect31: {
        width: 156,
        height: 16,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#000000",
        marginLeft: 10,
        marginTop: 7,
    },
    початковеМісце: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 14,
        marginTop: 5
    },
    початковеМісцеRow: {
        height: 30,
        flexDirection: "row",
        marginTop: 4,
        marginLeft: 8,
        marginRight: 18
    },
    rect21: {
        width: 343,
        height: 131,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#000000",
        marginTop: 8,
        marginLeft: 9
    },
    materialButtonShare: {
        top: "100%", // Set the top position to center vertically
        left: "50%", // Set the left position to center horizontally
        transform: [{ translateX: -34 }, { translateY: -34 }], // Adjust the translation to center the button
        height: 68,
        width: 68,
        borderRadius: 100,

    },
    rect11: {
        top: 20,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        width: 335,
        height: 650,
        alignSelf: "center",
        borderRadius: 5,
    },
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",

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

