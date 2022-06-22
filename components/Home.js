import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NavigateToPage1 = props => {
    props.navigation.navigate('Page1');
}

const NavigateToPage2 = props => {
    props.navigation.navigate('Page2');
}

const NavigateToPage3 = props => {
    props.navigation.navigate('Page3');
}

const Home = props => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title='Go to Page1' onPress={()=> NavigateToPage1(props)}/>
        <Button title='Go to Page2' onPress={()=> NavigateToPage2(props)}/>
        <Button title='Go to Page3' onPress={()=> NavigateToPage3(props)}/>
      </View>
    );
  }

export default Home;