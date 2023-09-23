import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({ item, setProductDetailId }) => {
  return (
    <Pressable
      style={styles.card} onPress={() => setProductDetailId(item._id)}
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 250,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    // borderWidth: 1,
    // borderColor: '#333',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    overflow: 'hidden'
  },
  contentCardText: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    gap: 3
  },
  cardTextTitle: {
    width: '100%',
    textAlign: 'center',
    color: '#FF6B6B',
    fontWeight: 'semibold',
    fontSize: 18
  },
  cardText: {
    // backgroundColor: '#FF6B6B',
    width: '100%',
    textAlign: 'center',
    color: '#333',
    fontSize: 14
  },

  cardImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover'
  }
})
