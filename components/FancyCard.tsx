import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}> Fancy Card </Text>
        <View style={[styles.card,styles.elevatedCard]}>
          <Image
            source={{
              uri: 'https://blooloop.com/wp-content/uploads/2018/07/Ahmedabad-Sidi-Saeed%E2%80%99s-Mosque.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sidi Saiyad Mosque</Text>
            <Text style={styles.cardLable}>World Heritage City, Ahmedabad</Text>
            <Text style={styles.cardDescription}>
              "The Sidi Saiyyed Mosque in Ahmedabad, Gujarat, is one of the
              city's most iconic landmarks, famous for its intricately carved
              stone lattice windows (jalis). Built in 1573, the mosque is a
              masterpiece of Indo-Islamic architecture, with the famed "Tree of
              Life" jali being a symbol of Ahmedabad itself."
            </Text>
          </View>
        </View>
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
  card:{
    width: 340,
    height: 360,
    borderRadius:8,
    marginHorizontal: 12,
    marginVertical:12,
  },
  elevatedCard:{
    backgroundColor: '#ffffff',
  },
  cardImage: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#212121',
  },
  cardLable: {
    fontSize: 14,
    color: '#666666',
    fontWeight: 600,
    marginBottom: 4,
    marginTop: 4,
  },
  cardDescription: {
    fontSize: 14,
    fontWeight: 400,
    color: '#999999',
    marginBottom: 4,
  },
});
