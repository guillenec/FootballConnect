import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils/colors'
import Header from '../../components/Header/Header'
const ItemDetail = ({ product }) => {
  console.log(product)
  return (
    <View style={styles.containItemDetail}>
      <Header title='Detalle ' />
      <Text>ItemDetail #{product}</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
  containItemDetail: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.color3
  }
})
