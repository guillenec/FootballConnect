import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CargaDatos from '../../components/CargaDatos/CargaDatos'

const AddEquipos = () => {
  return (
    <View style={styles.containAddEquipos}>
      <CargaDatos />
    </View>
  )
}

export default AddEquipos

const styles = StyleSheet.create({
  containAddEquipos: {
    width: '100%',
    paddingHorizontal: 1,
    flex: 1,
    backgroundColor: '#ff9dad',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
