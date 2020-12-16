// ItemComponent.js

import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',  
  },
  itemtext: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
     height: 30,
     paddingLeft:10,
    backgroundColor: 'steelblue',
  },
});

export default class ItemComponent extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View style={styles.itemsList}>
         
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
