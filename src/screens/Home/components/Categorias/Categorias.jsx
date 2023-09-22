import { FlatList } from 'react-native'
import React from 'react'
import { categorias } from '../../../../data/categoryDb'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categorias = ({ setCategorySelected }) => {
  console.log('Categorieas ->', categorias)

  return (
    <FlatList
      data={categorias}
      keyExtractor={category => category._id}
      renderItem={({ item }) => (
        <CategoryItem item={item} setCategorySelected={setCategorySelected} />
      )}
    />
  )
}

export default Categorias
