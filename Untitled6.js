import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity, Animated, ScrollView, FlatList, Icon } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonShare from "./MaterialButtonShare";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const STORAGE_KEY = '@profile_image';

const Untitled6 = (props) => {
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



        <Text style={styles.створенняОголошення}>Створення оголошення</Text>
      <View style={styles.rect2Stack}>
        <View style={styles.rect2}></View>
        <Text style={styles.початковеМісце}>Початкове місце:</Text>
      </View>
      <View style={styles.кінцевеМісцеRow}>
        <Text style={styles.кінцевеМісце}>Кінцеве місце:</Text>
        <View style={styles.rect3}></View>
      </View>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.rect4}>
          <Text style={styles.обратиПоточне}>Обрати поточне</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.rect5}>
          <Text style={styles.обратиНаМапі}>Обрати на мапі</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.або}>Або</Text>
      <TouchableOpacity style={styles.button4}>
        <View style={styles.rect6}>
          <Text style={styles.обратиПоточне}>Обрати поточне</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <View style={styles.rect7}>
          <Text style={styles.обратиНаМапі}>Обрати на мапі</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.або1}>Або</Text>
      <View style={styles.кількістьМісцьRow}>
        <Text style={styles.кількістьМісць}>Кількість місць:</Text>
        <View style={styles.rect8}></View>
      </View>
      <View style={styles.датаПодорожіRow}>
        <Text style={styles.датаПодорожі}>Дата подорожі:</Text>
        <View style={styles.rect9}></View>
      </View>
      <TouchableOpacity style={styles.button5}>
        <View style={styles.rect10}>
          <Text style={styles.опубликовати}>Опубликовати</Text>
        </View>
      </TouchableOpacity>

        
    </View>
    ); 
};


export default Untitled6;
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",

    },
    loremIpsum4Column: {
        width: 52,
        marginTop: 3,

    },
    loremIpsum4: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        height: 23,
        left: 34


    },
    rect1: {
        width: 394,
        height: 110,
        backgroundColor: "rgba(37,66,225,1)",
        alignSelf: "center",
    },
    image1StackStackRow: {
        height: 94,
        flexDirection: "row",
        marginTop: 21
    },
    image1StackStack: {
        width: 253,
        height: 90
    },
    image1Stack: {
        width: 214,
        height: 98,
        marginTop: 0,
        marginLeft: 0,
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
    image3Column: {
        width: 49,
        marginLeft: 6,

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
    image4: {
        width: 55,
        height: 55,
        marginTop: 2,
        marginLeft: 61,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#000000",
    },



    створенняОголошення: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 46,
        width: 335,
        fontSize: 30,
        textAlign: "center",
        marginLeft: 10
      },
      rect2: {
        top: 0,
        width: 180,
        height: 23,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        left: 140
      },
      початковеМісце: {
        top: 0,
        left: 15,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 121
      },
      rect2Stack: {
        width: 295,
        height: 23,
        marginTop: 15
      },
      кінцевеМісце: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        marginTop: 2,
        left: 15,
      },
      rect3: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 30
      },
      кінцевеМісцеRow: {
        height: 23,
        flexDirection: "row",
        marginTop: 129,
        marginLeft: 2,
        marginRight: 42
      },
      button2: {
        width: 180,
        height: 23,
        marginTop: -84,
        marginLeft: 140
      },
      rect4: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        left:0
      },
      обратиПоточне: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        marginTop: 1,
        marginLeft: 36
      },
      button: {
        width: 180,
        height: 23,
        marginTop: -54,
        marginLeft: 140
      },
      rect5: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5
      },
      обратиНаМапі: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        marginTop: 1,
        marginLeft: 36
      },
      або: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 23,
        width: 39,
        fontSize: 20,
        marginTop: -52,
        marginLeft: 210
      },
      button4: {
        width: 180,
        height: 23,
        marginTop: 189,
        marginLeft: 140
      },
      rect6: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5
      },
      обратиПоточне2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        marginTop: 4,
        marginLeft: 36
      },
      button3: {
        width: 180,
        height: 23,
        marginTop: -53,
        marginLeft: 140
      },
      rect7: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5
      },
      обратиНаМапі2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        marginTop: 2,
        marginLeft: 36
      },
      або1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 23,
        width: 39,
        fontSize: 20,
        marginTop: -53,
        marginLeft: 210
      },
      кількістьМісць: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        left: 17,
      },
      rect8: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 30
      },
      кількістьМісцьRow: {
        height: 23,
        flexDirection: "row",
        marginTop: 127,
        marginRight: 42
      },
    датаПодорожі: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 19,
        width: 108,
        left: 10,
    },
    rect9: {
        width: 180,
        height: 23,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 24
      },
      датаПодорожіRow: {
        height: 23,
        flexDirection: "row",
        marginTop: -54,
        marginLeft: 7,
        marginRight: 42
      },
      button5: {
        width: 152,
        height: 28,
        marginTop: 68,
        marginLeft: 110
      },
      rect10: {
        width: 152,
        height: 28,
        backgroundColor: "rgba(0,122,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5
      },
      опубликовати: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 20,
        width: 97,
        marginTop: 3,
        marginLeft: 27
      }
});