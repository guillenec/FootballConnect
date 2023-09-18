import { StyleSheet, Text, TextInput, View, FlatList, TouchableHighlight } from 'react-native'
import React, { useState } from 'react'
import ModalCustom from './Modal/Modal'
import Ionicons from '@expo/vector-icons/Ionicons'

const CargaDatos = () => {
  const [textValue, setTextValue] = useState('')
  const [list, setLIst] = useState([])

  // estados para el modal
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const removeProduct = (index) => {
    console.log(itemSelected)
    const updateProduct = [...list]
    updateProduct.splice(itemSelected, 1)
    setLIst(updateProduct)
    setModalVisible(false)
  }

  const handleModal = (index) => {
    setModalVisible(true)
    setItemSelected(index)
  }

  const handleChangeItem = (value) => {
    setTextValue(value)
  }

  const handleAddItem = () => {
    if (textValue === '') {
      return
    }
    console.log('ejecuta la funcion de agregar elemento')
    setLIst(prevState => [...prevState, { id: Math.random(), value: textValue }])
    setTextValue('')
  }

  const renderList = ({ item, index }) => {
    return (
      <View style={styles.sectionTextList}>
        <Text style={styles.textList}>{item.value}
        </Text>
        <Ionicons style={styles.iconTrash} name='ios-trash' onPress={() => handleModal(index)} />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.containSectionButton}>
        <View>
          <TextInput
            placeholder='Item de la lista'
            placeholderTextColor='#F5F5DC'
            value={textValue}
            onChangeText={handleChangeItem}
            style={styles.inputText}
          />
        </View>
        <TouchableHighlight
          style={styles.buttonAdd}
          onPress={handleAddItem}
        >
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableHighlight>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={renderList}
          keyExtractor={item => item.id}
        />
      </View>
      <ModalCustom modalVisible={modalVisible} setModalVisible={setModalVisible} removeProduct={removeProduct} />
    </View>
  )
}

export default CargaDatos

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#78B382',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    gap: 20
  },
  containSectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    height: 'auto',
    width: 300,
    backgroundColor: '#FF7F50',
    color: 'white',
    borderRadius: 4
  },
  buttonAdd: {
    color: '#ffffff',
    borderWidth: 2,
    borderColor: '#2E86C1',
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonText: {
    color: 'white', // Cambia el color del texto del botón
    fontSize: 16,
    fontWeight: 'semibold'
  },
  inputText: {
    width: 200,
    height: 40,
    maxHeight: 40,
    position: 'relative',
    color: '#ffffff'
  },

  listContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  sectionTextList: {
    width: 180,
    backgroundColor: '#4AA8D6',
    borderColor: '#FFA07A',
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 10,
    padding: 8

  },
  textList: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'normal'
  },
  iconTrash: {
    color: '#FF7F50',
    fontSize: 24
  }

})
