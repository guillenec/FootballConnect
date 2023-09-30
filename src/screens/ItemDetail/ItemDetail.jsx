import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Ionicons from '@expo/vector-icons/Ionicons'
import styles from './ItemDetail.style'

const ItemDetail = ({ navigation, route }) => {
  // console.log(product)

  const { product } = route.params

  return (
    <View style={styles.containItemDetail}>
      <Header title='📄 Detalle' />
      <View style={styles.contentCard}>
        <View style={styles.card}>
          <Image
            resizeMode='cover'
            resizeMethod='resize'
            style={styles.cardImage}
            source={{ uri: product.imagen }}
          />
          <View style={styles.headCard}>
            <Text style={styles.identify}>#{product._id}</Text>
            <Text style={styles.name}>{product.nombre}</Text>
          </View>
          <Text style={styles.cardText}>Region: {product.category}</Text>
          <Text style={styles.cardText}>Ciudad: {product.ciudad}</Text>
        </View>·
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
