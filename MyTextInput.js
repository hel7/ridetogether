import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { StyleSheet,  Text, Image } from "react-native";
function MyTextInput() {
  const [text, setText] = useState('');

  const handleInputChange = (value) => {
    setText(value);
  };

  const handleSubmit = () => {
    Alert.alert('Entered Text', text);
  };

  return (
    <View>
      <TextInput
        style={{ height: 30, width: 235, borderRadius: 100, backgroundColor: "#E6E6E6", borderWidth: 1, marginBottom: 10 }}
        onChangeText={handleInputChange}
        value={text}
      />
     <TextInput
        style={{ height: 30, width: 235, borderRadius: 100, backgroundColor: "#E6E6E6", borderWidth: 1, marginBottom: 10 }}
        onChangeText={handleInputChange}
        value={text}
      />

<Text style={styles.або}>Або:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      width: 46,
      height: 27
    },
    або: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      fontSize: 22
    }
  });

export default MyTextInput;






