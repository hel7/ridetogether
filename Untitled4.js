import React, {useState,useEffect, Component } from "react"; 
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialRightIconTextbox from "./MaterialRightIconTextbox";
import MaterialRightIconTextbox2 from "./MaterialRightIconTextbox 2";
import { Font } from 'expo-font';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@profile_image';
function Untitled4(props) {

  const [image, setImage] = useState(null);

  useEffect(() => {
    loadImage();
  }, []);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'roboto-700': require('./fonts/Roboto-Bold.ttf'),
        'roboto-regular': require('./fonts/Roboto-Regular.ttf'),
      });
    }

    loadFonts();
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
  return (
    <View style={styles.container}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <View style={styles.rideTogether1Row}>
            <Text style={styles.rideTogether1}>RideTogether</Text>
            <Image
              source={require("./assets/images/w450h4001385925286Star.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.loremIpsum2}>3.5</Text>
          </View>
          <View style={styles.loremIpsum3Row}>
            <Text style={styles.loremIpsum3}>
              Гаряча лінія:{"\n"}ХХХ-ХХХ-ХХХ-ХХХ
            </Text>
          
          </View>
        </View>
        <Image
          source={require("./assets/images/Group_1.png")}//из бд
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <Image
          
    source={{ uri: image }}
    resizeMode="contain"
    style={styles.image4}
        ></Image>
      </View>
      <Text style={styles.профіль1}>Профіль</Text>
      <View style={styles.image2Row}>
        <Image
          source={require("./assets/images/d.jpg")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <View style={styles.group}>
          <View style={styles.rect5}>
          
            <View style={styles.image5Row}>
             
              <Image
                source={require("./assets/images/w450h4001385925286Star.png")}
                resizeMode="contain"
                style={styles.image5}
              ></Image>
              <Text style={styles.loremIpsum4}>3.6</Text>
             
            </View>
           
          </View>

        </View>
      </View>
      <MaterialRightIconTextbox2
      
        inputStyle=" Логін:"
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox2>
      <MaterialRightIconTextbox2

        inputStyle=" Почтова скриня:"
        style={styles.materialRightIconTextbox2}
      ></MaterialRightIconTextbox2>
      <MaterialRightIconTextbox2

        inputStyle=" Номер телефону:"
        style={styles.materialRightIconTextbox5}
      ></MaterialRightIconTextbox2>
      <View style={styles.rect7}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 360,
    height: 110,
    position: "absolute",
    backgroundColor: "rgba(37,66,225,1)",
    left: 34
  },
  rideTogether1: {
    top: -4,
    height: 50,
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 23,

  },
  image3: {
    width: 30,
    height: 30,
    marginLeft: 75,
    marginTop: -13,
    
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: -10
  },
  rideTogether1Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 34,
    marginLeft: 84,
    marginRight: 16
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 79,
    fontSize: 8,
    textAlign: "center",
    marginTop: 4,
    marginLeft: 55
  },
  логін1: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 18,
    width: 49,
    marginLeft: 58
  },
  loremIpsum3Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 174
  },
  image1: {
    width: 155,
    height: 100,
    position: "absolute",
    
    
  },
  image4: {
    top: 72,
    left: 292,
    width: 55,
    height: 55,
    marginTop: -19,
    marginLeft: 45,
    position: "absolute",
    borderRadius: 100, 
    borderWidth: 2,
    borderColor: "#000000",
  },
  rect1Stack: {
    width: 394,
    height: 112,
    marginLeft: -34
  },
  профіль1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    textAlign: "center",
    fontSize: 35,
    marginTop: 10,
  },
  image2: {
    width: 156,
    height: 156,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 100, // Половина ширины (или высоты) картинки
    overflow: 'hidden', // Скрыть контент, выходящий за пределы границы
  },
  group: {
    width: 67,
    height: 1000005,
    marginLeft: 8
  },
  rect5: {
    width: 67,
    height: 44,
    backgroundColor: "rgba(85,253,254,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    top: 42
  },
  image5: {
    width: 29,
    height: 29
  },
  loremIpsum4: {
    top: -2,
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 18,
    marginTop: 5
  },
  image5Row: {
    height: 29,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 4,
    marginTop: 7
  },
  rect8: {
    width: 67,
    height: 43,
    backgroundColor: "rgba(85,253,254,1)",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 18
  },
  image6: {
    height: 40,
    width: 40,
    marginTop: 2,
    marginLeft: 12
  },
  image2Row: {
    height: 133,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 104,
    marginRight: 25
  },
  materialRightIconTextbox1: {
    height: 26,
    width: 239,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 8,
    marginTop: 38,
    marginLeft: 62
  },
  materialRightIconTextbox2: {
    height: 26,
    width: 239,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 8,
    marginTop: 12,
    marginLeft: 62
  },
  materialRightIconTextbox5: {
    height: 26,
    width: 239,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 8,
    marginTop: 14,
    marginLeft: 62
  },
  rect7: {
    width: 303,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 322,
    marginLeft: 47
  }
});

export default Untitled4;
