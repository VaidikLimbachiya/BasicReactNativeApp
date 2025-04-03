import React, { Component } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

export class App extends Component {
  render() {
    return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ActionCard />
        </View>
      </ScrollView>
    </SafeAreaView>
    )
  }
}

export default App;
