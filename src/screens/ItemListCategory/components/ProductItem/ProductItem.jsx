import { Image, Pressable, Text, View } from 'react-native'
import React from 'react'
import styles from './ProductItem.style'
const ProductItem = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('ItemDetail', { product: item })}
      style={styles.card}
    >
      <Image
        resizeMode='cover'
        resizeMethod='resize'
        style={styles.cardImage}
        source={{ uri: item.imagen }}
      />
      <View style={styles.contentCardText}>
        <Text style={styles.cardTextTitle}>{item.nombre || 'cargando...'}</Text>
        <Text style={styles.cardText}>{item.ciudad || 'cargando...'}</Text>
      </View>

    </Pressable>
  )
}

export default ProductItem
