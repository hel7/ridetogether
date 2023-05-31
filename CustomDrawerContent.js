import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@profile_image';

const CustomDrawerContent = props => {
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


  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground
         source={{ uri: image }}
          style={{padding: 20,  marginTop: -43, height: 190,}}>
          <Image
            source={{ uri: image }}
            resizeMode="contain"
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginBottom: 10,
              borderWidth: 2,
              borderColor: "#000000",
              marginTop: 80,
              marginLeft: -10
            }}
          />
         
        </ImageBackground>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc', top: 30}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
