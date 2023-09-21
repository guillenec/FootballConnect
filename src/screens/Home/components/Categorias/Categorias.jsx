import { FlatList } from 'react-native'
import React from 'react'
import { categorias } from '../../../../data/categoryDb'
import { CategoryItem } from '../index'

const Categorias = ({ setCategorySelected }) => {
  console.log(categorias)
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
