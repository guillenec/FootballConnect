import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import Header from '../../components/Header/Header'
import Ionicons from '@expo/vector-icons/Ionicons'

const ItemDetail = ({ product, setCategorySelected }) => {
  console.log(product)
  return (
    <View style={styles.containItemDetail}>
      <Header title='Detalle ' />
      <Text>ItemDetail #{product}</Text>
      <Pressable
        style={styles.botonBack} onPress={() => setCategorySelected('all')}
      >
        <Ionicons name='arrow-back' size={25} color='white' />
      </Pressable>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  containItemDetail: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.color3
  },
  botonBack: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    marginVertical: 10,
    flez: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
