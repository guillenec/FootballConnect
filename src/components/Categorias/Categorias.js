import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { categorias } from '../../data/categoryDb'
import CategoryItem from './CategoryItem/CategoryItem'
const Categorias = () => {
  console.log(categorias)
  return (
    <View style={styles.containerCategorias}>
      <FlatList
        data={categorias}
        keyExtractor={category => category._id}
        renderItem={({ item }) => (
          <CategoryItem item={item} />
        )}
      />
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({
  containerCategorias: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: '#83f083'
  }
})
