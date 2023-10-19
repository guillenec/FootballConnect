import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './ItemDetail.style'

const ItemDetail = ({ navigation, route }) => {
  const { product } = route.params
  console.log(' DETALLE ->', product)

  return (
    <View style={styles.containItemDetail}>
      <Header title='📄 Detalle' />
      <View style={styles.contentCard}>
        <View style={styles.card}>
          <Image
            resizeMode='cover'
            resizeMethod='resize'
            style={styles.cardImage}
            source={{ uri: product?.galeria[0].imagenes[0] }}
          />
          <View style={styles.headCard}>
            <Text style={styles.identify}>#{product?.id || 'cargando...'}</Text>
            <Text style={styles.name}>{product?.nombre || 'cargando...'}</Text>
          </View>
          <Text style={styles.cardText}>Region: {product?.id_tipo || 'cargando...'}</Text>
          <Text style={styles.cardText}>Ciudad: {product?.direccion || 'cargando...'}</Text>
        </View>
      </View>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.botonBack}
      >
        <Ionicons name='arrow-back' size={25} color='white' />
      </Pressable>
    </View>
  )
}

export default ItemDetail
