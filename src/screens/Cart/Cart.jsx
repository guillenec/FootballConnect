import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Cart.style'
import Header from '../../components/Header/Header'
import obtenerReservaCompleta from './Service/fetchCarrito'
import CartItem from './components/CartItem'

const Cart = () => {
  const [cart, setCart] = useState(null)
  // simulare traer los datos de las reservas

  useEffect(() => {
    obtenerReservaCompleta(1)
      .then((res) => {
        setCart(res)
        console.log('RESERVAS ->', res)
      })
      .catch((err) => {
        console.error('ERROR ->', err)
      })
  }, [])

  console.log('CART ->', cart)
  return (
    <View style={styles.cartContainer}>
      <Header title='🛒 Carrito' />
      <View style={styles.list}>
        <FlatList
          data={cart}
          keyExtractor={(item) => item?.reserva?.id}
          renderItem={({ item }) => (
            <CartItem objeto={item} />
          )}
        />
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
