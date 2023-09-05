import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome' // Ejemplo de FontAwesome

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [list, setLIst] = useState([])
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
      <TouchableOpacity style={styles.sectionTextList} onPress={() => handleModal(index)}>
        <Text style={styles.textList}>{item.value}</Text>
      </TouchableOpacity>
    )
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
          renderItem={renderList}
          keyExtractor={item => item.id}
        >
          <Icon name='trash' size={30} color='red' />
        </FlatList>
      </View>
      <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <View style={styles.modalTitle}>
              <Text>
                mi modal
                {/* {itemSelected.value} */}
              </Text>
            </View>
            <View style={styles.modalMessage}>
              <Text>
                estas seguro de eliminar?
              </Text>
            </View>
            <View style={styles.modalButton}>
              <Button title='eliminar product' onPress={removeProduct} />
            </View>
            <View style={styles.modalButton}>
              <Button title='close Modal' onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </View>
      </Modal>
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
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    gap: 10,
    marginBottom: 50
  },
  sectionTextList: {
    backgroundColor: '#f1c274',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f7d8bf',
    marginTop: 10
  },
  textList: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'normal',
    marginVertical: 1,
    marginHorizontal: 30,
    padding: 10
  },
  modalVisible: {
    width: 200,
    height: 200,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7d8bf',
    padding: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalCard: {
    padding: 45,
    borderRadius: 10,
    backgroundColor: 'rgba( 51, 51, 51, 0.6 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: ' blur( 3px )',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
  },
  modalTitle: {
    backgroundColor: '#f1c274',
    color: '#333',
    fontSize: 20
  },
  modalMessage: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'

  },
  modalButton: {
    marginTop: 15
  }
})
