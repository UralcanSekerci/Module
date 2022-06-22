import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'

export default class Page3 extends React.Component{
    state = {
        value: 0
    }
    
    incrementValue = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrementValue = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    setZero = () => {
        this.setState({
            value: 0
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 60, marginBottom: 20}}>{this.state.value}</Text>
                <StatusBar style='auto'/>
                <View style={{flexDirection: 'row'}}>
                    <Button onPress={this.decrementValue} title="Decrease"/>
                    <Text>  </Text>
                    <Button onPress={this.incrementValue} title="Increase"/>
                    <Text>  </Text>
                    <Button onPress={this.setZero} title="Set Zero"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });