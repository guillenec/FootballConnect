import { Pressable, Text } from 'react-native'
import React from 'react'
import Card from '../../Card/Card'
import styles from './CategoryItem.style'

const CategoryItem = ({ item }) => {
  return (
    <Pressable style={styles.CategoryItem} onPress={() => console.log(item.nombre)}>
      <Card newStyle={styles.contentCard}>
        <Text style={styles.textCategoryItem}>{item.nombre}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
