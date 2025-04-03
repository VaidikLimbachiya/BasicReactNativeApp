import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FlatCards extends Component {
  render() {
    return (
      <View >
        <Text style={styles.heading}> Flat Cards </Text>
        <View style={styles.container}>
            <View style={[styles.cardOne, styles.card]}>
                <Text>Electric Violet	 </Text>
            </View>
            <View style={[styles.cardTwo, styles.card]}>
                <Text>Cyan Blue	 </Text>
            </View>
            <View style={[styles.cardThree, styles.card]}>
                <Text>Rose Pink	 </Text>
            </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
   
    heading:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal: 8,
    },
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    card:{
        flex: 1,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:6,
        margin: 10,
    },
    cardOne:{
        backgroundColor: '#7C4DFF',
    },
    cardTwo:{
        backgroundColor: '#00E5FF',
    },
    cardThree:{
        backgroundColor: '#FF4081',
    },
})
