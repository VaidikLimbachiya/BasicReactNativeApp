import React, {Component} from 'react';
import {Text, StyleSheet, View, Image,Linking,TouchableOpacity} from 'react-native';

export default class ActionCard extends Component {
  render() {
    function openWebsite(website:string) {
        Linking.openURL(website);
    }
    return (
      <View>
        <Text style={styles.headingText}> Blog card </Text>
        <View style={[styles.card, styles.Elevatedcard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.cardHeading}>What's New in Javascript</Text>
            <Image
              source={{
                uri: 'https://www.syncfusion.com/blogs/wp-content/uploads/2025/01/Mastering-JavaScript-Memory-Leaks-Detect-Fix-and-Prevent.png',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardContentContainer}>
            <Text numberOfLines={3} style={styles.cardContent}>
              JavaScript is a multi-paradigm, dynamic language with types and
              operators, standard built-in objects, and methods. Its syntax is
              based on the Java and C languages — many structures from those
              languages apply to JavaScript as well. JavaScript supports
              object-oriented programming with object prototypes and classes.
            </Text>
            <View style={styles.footerContainer}>
                 <TouchableOpacity onPress={()=> openWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview')
                 }>
                    <Text style={styles.cardLink}>
                        Read More
                    </Text>
                 </TouchableOpacity>
            </View>
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
  card: {
    margin: 8, 
    borderRadius: 6
},
  Elevatedcard: {
    backgroundColor: 'white',
  },
  headingContainer: {},
  cardHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    padding: 8,
  },
  cardImage: {
    height: 200,
  },
  cardContentContainer:{
  },
  cardContent:{
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold',

  },
  footerContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 8,
  },
  cardLink:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4FC3F7',
    padding: 8,
  },
});
