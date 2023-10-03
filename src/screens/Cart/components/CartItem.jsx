import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './cartItem.style'
import Ionicons from '@expo/vector-icons/Ionicons'

const CartItem = ({ objeto }) => {
  return (
    <View style={styles.containCartItem}>
      <Image
        resizeMode='cover'
        resizeMethod='resize'
        style={styles.cardImage}
        source={{ uri: objeto.imagen }}
      />
      <View>
        <Text style={styles.name}>{objeto.nombre || '...cargando'}</Text>
      </View>
      <View>
        <Text style={styles.detalle}>{objeto.nombre || '...cargando'}</Text>
        <Text style={styles.detalle}>Cantidad</Text>
      </View>
      <Pressable style={styles.button}>
        <Ionicons name='trash' />
      </Pressable>
    </View>
  )
}

export default CartItem
