import { Text, View } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import Header from '../../components/Header/Header'

const Cart = () => {
  return (
    <View style={styles.cartContainer}>
      <Header title='🛒 Carrito' />

      <Text>Cart</Text>
    </View>
  )
}

export default Cart
