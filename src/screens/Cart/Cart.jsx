import { Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import styles from './Cart.style'
import Header from '../../components/Header/Header'
import obtenerReservaCompleta from './Service/fetchCarrito'

const Cart = () => {
  const [cart, setCart] = useState([])
  // simulare traer los datos de las reservas
  useEffect(() => {
    obtenerReservaCompleta(1)
      .then((res) => {
        setCart(res.data)
        console.log('RESERVAS ->', res.data)
      })
      .catch((err) => {
        console.error('ERROR ->', err)
      })
  }, [])

  console.log('CART ->', cart)
  return (
    <View style={styles.cartContainer}>
      <Header title='🛒 Carrito' />
      <View>
        {/* <FlatList
          data={cart}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text>{item.nombre}</Text>
          )}
        /> */}
      </View>
      <View style={styles.cartContentContainer}>
        <Pressable style={styles.cartContent}>
          <Text style={styles.cartTextTitle}>Confirmar</Text>
          <Text style={styles.cartTextPArrafo}>Total $0.00</Text>
        </Pressable>
      </View>

    </View>
  )
}

export default Cart
