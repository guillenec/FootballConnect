import { FlatList, View } from 'react-native'
import React from 'react'
import { categorias } from '../../data/categoryDb'
import CategoryItem from './CategoryItem/CategoryItem'
import styles from './Categorias.style'

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
