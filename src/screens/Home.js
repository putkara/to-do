// Home.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: 'Welcome to your App',
      headerRight: (
        //<Button onPress={() =>navigate('AddItemScreen', { id: '20', name: 'Jane' })} title="ADD task" color="#008000" />
        <Button onPress={() =>{}} title="ADD task" color="#008000" />
       ),
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Home Screen</Text> 
         <Button onPress={() =>navigate('AddItemScreen', { id: '20', name: 'Jane' })} title="ADD task" color="#008000" />
         <Button onPress={() =>navigate('ListItemScreen', { id: '20', name: 'Jane' })} title="List Items" color="#008000" />
      </View>
    );
  }
}
