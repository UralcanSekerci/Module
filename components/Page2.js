import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";

const Page2 = (props) => {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    setSubmitted(!submitted);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Enter Text :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter anything you want here"
        onChangeText={(val) => setText(val)}
      />
      <Button title="Change Text" onPress={onPressHandler} />
      {submitted ? <Text>Your Text : {text}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default Page2;
