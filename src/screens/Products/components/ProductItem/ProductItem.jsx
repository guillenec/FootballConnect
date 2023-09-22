import { Image, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'

const ProductItem = ({ item, setProductDetailId }) => {
  return (
    <Pressable style={styles.card} onPress={() => setProductDetailId(item._id)}>
      <Text style={styles.cardText}>{item.nombre || 'cargando...'}</Text>
      <Image
        resizeMode='cover'
        resizeMethod='resize'
        style={styles.cardImage}
        source={{ uri: item.imagen }}
      />
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'flex-start',
    backgroundColor: '#F1FAEE',
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    overflow: 'hidden',
    margin: 5
  },
  cardText: {
    color: '#333',
    fontSize: 18
  },

  cardImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: '#F1FAEE'
  }
})
