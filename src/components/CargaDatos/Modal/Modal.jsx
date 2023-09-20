import React from 'react'
import { View, Modal, Text, Button } from 'react-native'
import styles from './Modal.style'

const ModalCustom = ({ modalVisible, setModalVisible, removeProduct }) => {
  return (
    <Modal
      visible={modalVisible}
      animationType='slide'
      transparent
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalCard}>
          <View style={styles.modalMessage}>
            <Text style={styles.modalTitle}>
              Estas seguro de eliminar?
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
  )
}

export default ModalCustom
