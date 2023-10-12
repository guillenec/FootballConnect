import { FlatList } from 'react-native'
import React from 'react'
import { tipoCanchas } from '../../../../data/categoryDb'
import CategoryItem from '../CategoryItem/CategoryItem'
import styles from '../CategoryItem/CategoryItem.style'

const Categorias = ({ navigation }) => {
  // console.log('Categorieas ->', categorias)

  return (
    <FlatList
      style={styles.containerCtegorias}
      data={tipoCanchas}
      keyExtractor={tipoCanchas => tipoCanchas.id}
      renderItem={({ item }) => (
        <CategoryItem
          item={item}
          navigation={navigation}
        />
      )}
    />
  )
}

export default Categorias
