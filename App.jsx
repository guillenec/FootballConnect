import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [list, setLIst] = useState([])

  const handleChangeItem = (value) => {
    setTextValue(value)
  }
  const handleAddItem = () => {
    setLIst(prevState => [...prevState, { id: uuidv4(), value: textValue }])
    setTextValue('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.containSectionButton}>
        <View>
          <TextInput
            placeholder='Item de la lista'
            value={textValue}
            onChangeText={handleChangeItem}
            style={styles.inputText}
          />
          <View style={styles.underline} />
        </View>
        <Button title='Agregar' onPress={handleAddItem} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View style={styles.sectionTextList}>
              <Text style={styles.textList}>{item.value}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  )
}

/*
  {
        list?.map((item, index) => (
          <View key={index} style={styles.sectionTextList}>
            <Text style={styles.textList}>{item.value}</Text>
          </View>
        ))
      }
 */

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
    flexDirection: 'column',
    height: 'auto',
    gap: 20
  },
  containSectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'auto'
  },

  inputText: {
    width: 200,
    height: 40,
    maxHeight: 40,
    position: 'relative',
    backgroundColor: 'white'
  },
  underline: {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 5, // Ajusta el grosor del subrayado
    backgroundColor: 'gray', // Color del subrayado
    borderRadius: 10 // Ajusta este valor para redondear más o menos
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    gap: 10
  },
  sectionTextList: {
    width: 200,
    height: 25,
    backgroundColor: '#f1c274',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f7d8bf',
    gap: 10
  },
  textList: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'normal',
    padding: 10
  }
})
