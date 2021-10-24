import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import { useState } from 'react';
import Item from "./components/Item";

const App = () => {
  // TODO: Declare the list state with an emplty array as default value
  const [list, setList] = useState([]);
  const [food, setFood] = useState("");

  const deleteItem = (id) => {
    // TODO: Delete a single image Item by it index (you can use .filter() js method)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food list</Text>
      <View>
          {
            // TODO: Dispaly a warning message if the List if empty
          }
          {
            list.map((item, index)=> {
              return  <Item 
                        name={item} 
                        id={index + 1} 
                        onDelete={(idDelete)=> {
                          deleteItem(idDelete)
                        }}
                      />
            })
          }
      </View>
      <Button title="Add Food" onPress={() => {
        // TODO:  Add a food item from TextInput value
      }} />

      <TextInput 
        style={styles.input} 
        value={food} 
        placeholder="Add food"
        // TODO:  Call onChangeText method to update state food value
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10
  },
  // TODO: Add custom styles
});

export default App;
