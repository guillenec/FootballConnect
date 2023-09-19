import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Categorias = () => {
  return (
    <View style={styles.containCategorias}>
      <Text>Categorias</Text>
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({
  containCategorias: {
    flex: 1,
    // backgroundColor: '#ff9dad',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
