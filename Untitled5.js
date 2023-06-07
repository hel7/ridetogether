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

const Untitled5 = (props) => {
    const [image, setImage] = useState(null);
    const data = [
        { id: 1, title: 'Item 1' },
        { id: 2, title: 'Item 2' },
        { id: 3, title: 'Item 3' },
        { id: 3, title: 'Item 3' },
        { id: 3, title: 'Item 3' },
        { id: 3, title: 'Item 3' },
        { id: 10, title: 'Item 3' },
        // Add more items as needed
      ];
    
      const renderItem = ({ item }) => (
        <View style={styles.rect}>
          <View style={styles.rect2Row}>
            <View style={styles.rect2f}>
            <FontAwesomeIcon name="image" style={styles.iconf1}></FontAwesomeIcon>
  <Text style={styles.loremIpsumf1}>{item.title}</Text>

            </View>
            <View style={styles.датаПодорожі2Stack}>
              <Text style={styles.датаПодорожі2}>Дата подорожі</Text>
              <View style={styles.rect7f}></View>
            </View>
          </View>
          <View style={styles.почетковеМістоRow}>
            <Text style={styles.почетковеМісто}>Почеткове місто</Text>
            <View style={styles.rect3f}></View>
          </View>
          <View style={styles.кінцевеМістоRow}>
            <Text style={styles.кінцевеМісто}>Кінцеве місто</Text>
            <View style={styles.rect4f}></View>
          </View>
          <View style={styles.статус2Row}>
            <Text style={styles.статус2}>Статус</Text>
            <View style={styles.rect6f}></View>
          </View>
          <View style={styles.кількістьМісцьRow}>
            <Text style={styles.кількістьМісць}>Кількість місць</Text>
            <View style={styles.rect5f}></View>
          </View>
          <View style={styles.вільнихRow}>
            <Text style={styles.вільних}>Вільних</Text>
            <View style={styles.rect8f}></View>
          </View>
          <View style={styles.rect10Row}>
            <View style={styles.rect10f}></View>
            <View style={styles.rect9f}></View>
          </View>
        </View>
      );
    
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
                  <FlatList
               
                          data={data}
                          renderItem={renderItem}
                          keyExtractor={(item) => item.id.toString()}
                    />
                 
              </View>
              <View style={styles.rect7}></View>
              
        

          <View style={{ position: 'absolute', bottom: 100, right: 20, width: 68, borderRadius: 100, height: 68, alignSelf: 'flex-end' }}>
              <MaterialButtonShare
              
                  style={styles.materialButtonShare}
              ></MaterialButtonShare>



          </View>

      </View>


); 
};



export default Untitled5;
const styles = StyleSheet.create({
    containerf: {
        width: 317,
        height: 168,
        marginTop: 10,
        marginLeft: 8
      },
    rect9f: {
        width: 134,
        height: 20,
        backgroundColor: "rgba(85,253,254,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 21
      },
    rect10f: {
        width: 134,
        height: 20,
        backgroundColor: "rgba(85,253,254,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginTop: 1
      },
     rect10Row: {
        height: 21,
        flexDirection: "row",
        marginTop: 11,
        marginLeft: 14,
        marginRight: 14
      },
    rect8f: {
        width: 129,
        height: 12,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 9,
        marginTop: 2
      },
    вільних: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 17,
        width: 110
      },
    вільнихRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 3,
        marginLeft: 5,
        marginRight: 64
      },
    rect5f: {
        width: 129,
        height: 12,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 9,
        marginTop: 3
      },
    кількістьМісцьRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 3,
        marginLeft: 5,
        marginRight: 64
      },
    статус2: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 17,
        width: 110
      },
    rect6f: {
        width: 129,
        height: 12,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 9,
        marginTop: 3
      },
    статус2Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 3,
        marginLeft: 5,
        marginRight: 64
      },
      кількістьМісць: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 17,
        width: 110
      },
    rect4f: {
        width: 129,
        height: 12,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 9,
        marginTop: 1
      },
    кінцевеМісто: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 16,
        width: 110
      },
    кінцевеМістоRow: {
        height: 16,
        flexDirection: "row",
        marginTop: 4,
        marginLeft: 5,
        marginRight: 64
      },
    rect3f: {
        width: 129,
        height: 12,
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginLeft: 9,
        marginTop: 2
      },
    почетковеМісто: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 16,
        width: 110
      },
    почетковеМістоRow: {
        height: 16,
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 5,
        marginRight: 64
      },
    rect7f: {
        top: 2,
        left: 103,
        width: 71,
        height: 14,
        position: "absolute",
        backgroundColor: "rgba(255,255,255,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5
      },
    датаПодорожі2: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        height: 17,
        width: 110
      },
    датаПодорожі2Stack: {
        width: 174,
        height: 17,
        marginLeft: 4,
        marginTop: 9
      },
    loremIpsumf1: {
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 17,
        width: 85,
        marginTop: 8,
        marginLeft: 39
      },
    iconf1: {
        color: "rgba(128,128,128,1)",
        fontSize: 30,
        height: 0,
        width: 0,
        marginLeft: 5
      },
    item: {
        padding: 10,
    },
    rect2Row: {
        height: 32,
        flexDirection: "row",
        marginRight: 9
      },
    rect2f: {
        width: 130,
        height: 32,
        backgroundColor: "rgba(85,253,254,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5
      },
    rect: {
        width: 317,
        height: 168,
        backgroundColor: "rgba(37,66,225,1)",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 8,
      },
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
       marginTop: 20,
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
        top: 10,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        width: 335,
        height: 350,
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

