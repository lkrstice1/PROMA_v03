import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [unos, promjenaUnosa] = useState("")
  const [ciljevi, postaviCiljeve] = useState([])
  
  const noviUnos = (tekst) => {
    promjenaUnosa(tekst);
  }

  const noviCilj = () => {
    console.log(unos)
    postaviCiljeve(ciljevi => [...ciljevi, unos])
    promjenaUnosa('')
  }

  const stilovi = StyleSheet.create({
    ekran: {
      padding: 50
    },
    unos: {
      width: '70%', 
      marginBottom: 5, 
      borderBottomColor: 'black', 
      borderBottomWidth: 1
    },
    lista: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: "#ccc",
      borderColor: 'black',
      borderWidth: 1
    }
  });

  return (
    <View style={stilovi.ekran}>
      <View
        style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
      >
        <TextInput 
          placeholder = 'dodaj cilj'
          style = {stilovi.unos}
          value={unos}
          onChangeText={noviUnos}
        />
        <Button title='Dodaj' 
        onPress={noviCilj} />
      </View>
      <View>
        {ciljevi.map(cilj => 
          <View key={cilj} style={stilovi.lista}>
            <Text>{cilj}</Text>
          </View>
        )}
      </View>
      <ScrollView>
          {ciljevi.map(cilj =>
            <View key={cilj} style={stilovi.lista}>
                <Text>{cilj}</Text>
            </View>
            )}
      </ScrollView>
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
