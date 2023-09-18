import React from 'react'
import { View, Modal, Text, Button, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
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
    alignItems: 'center',
    backgroundColor: 'rgba(34, 139, 34, 0.863)'
  },
  modalCard: {
    padding: 45,
    borderRadius: 10,
    backgroundColor: '#FF7F50',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: ' blur( 3px )',
    border: '1px solid rgba( 255, 255, 255, 0.18 )'
  },
  modalTitle: {
    color: '#FFFFFF',
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
