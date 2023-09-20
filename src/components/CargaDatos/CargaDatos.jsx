import { Text, TextInput, View, FlatList, TouchableHighlight } from 'react-native'
import ModalCustom from './Modal/Modal'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './CargaDatos.style'

import { useCargaDatosHooks } from './hooks/CargaDatosHooks'

const CargaDatos = () => {
  const {
    setModalVisible, textValue, list, modalVisible, removeProduct, handleModal, handleChangeItem, handleAddItem
  } = useCargaDatosHooks()

  // no lo componetizamos ya que no es necesario
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
            placeholder='Añade equipos a la lista'
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
