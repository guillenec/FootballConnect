import { Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './Cart.style'
import Header from '../../components/Header/Header'

const Cart = () => {
  return (
    <View style={styles.cartContainer}>
      <Header title='🛒 Carrito' />

      <View style={styles.cartContentContainer}>
        <Pressable style={styles.cartContent}>
          <Text style={styles.cartContentText}>Confirmar</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Cart
