import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [natpis, postaviNatpis] = useState("Programiranje mobilnih aplikacija")
  const klik = () => {
    postaviNatpis('Novi natpis');
  }

  return (
    <View style={styles.container}>
      <Text>{natpis}</Text>
      <Button title='Promjena' onPress={klik} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
