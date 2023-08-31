import { Button, StyleSheet, Text, TextInput, View, FlatList, Modal } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [list, setLIst] = useState([])
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleDelete = () => {

  }

  const handleModal = () => {

  }

  const handleChangeItem = (value) => {
    setTextValue(value)
  }
  const handleAddItem = () => {
    setLIst(prevState => [...prevState, { id: Math.random(), value: textValue }])
    setTextValue('')
  }

  const renderList = ({ item }) => {
    return (
      <View style={styles.sectionTextList}>
        <Text style={styles.textList}>{item.value}</Text>
      </View>
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
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType='fade'
      >
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
          <Button title='Eliminar' onPress={handleDelete} />
        </View>
        <Button title='close Modal' onPress={() => setModalVisible(!itemSelected)} />
      </Modal>
      <Button title='Open Modal' onPress={() => setModalVisible(true)} />
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
    gap: 10
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
