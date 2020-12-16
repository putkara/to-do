// ListItem.js

import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView,Button } from 'react-native';
import ItemComponent from '../components/ItemComponent';

import { db } from '../config/db';

let itemsRef = db.ref('/items');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#B6A6BB',
  },
});

export default class ListItem extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
         <Button onPress={() =>navigate('AddItemScreen', { id: '20', name: 'Jane' })} title="ADD task" color="#008000" />
      
        {this.state.items.length > 0
          ? <ItemComponent items={this.state.items} />
          : <Text>No items</Text>}
          
          
      </View>
    );
  }
}
