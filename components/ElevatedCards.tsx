import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class ElevatedCards extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Elevated Cards </Text>
        <ScrollView style={styles.container} horizontal={true}>
          <View style={[styles.cardOne, styles.Elevatedcard]}>
            <Text>This</Text>
          </View>
          <View style={[styles.cardTwo, styles.Elevatedcard]}>
            <Text>is</Text>
          </View>
          <View style={[styles.cardThree, styles.Elevatedcard]}>
            <Text>the</Text>
          </View>
          <View style={[styles.cardFour, styles.Elevatedcard]}>
            <Text>Hrizontal</Text>
          </View>
          <View style={[styles.cardFive, styles.Elevatedcard]}>
            <Text>Scrollable</Text>
          </View>
          <View style={[styles.cardSix, styles.Elevatedcard]}>
            <Text>Card</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 8,
  },
  container: {
    padding: 8,
  },
  Elevatedcard: {
    flex: 1,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    margin: 10,
  },
  cardOne: {
    backgroundColor: '#4FC3F7',
    height: 100,
    width: 100,
  },
  cardTwo: {
    backgroundColor: '#66FFA6',
    height: 100,
    width: 100,
  },
  cardThree: {
    backgroundColor: '#B388FF',
    height: 100,
    width: 100,
  },
  cardFour: {
    backgroundColor: '#FFD54F',
    height: 100,
    width: 100,
  },
  cardFive: {
    backgroundColor: '#FF6E6E',
    height: 100,
    width: 100,
  },
  cardSix: {
    backgroundColor: '#90A4AE',
    height: 100,
    width: 100,
  },
});
