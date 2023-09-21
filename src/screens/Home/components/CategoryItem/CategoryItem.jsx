import { Pressable, Text } from 'react-native'
import React from 'react'
import styles from './CategoryItem.style'
import { Card } from '../../../../components'

const CategoryItem = ({ item, setCategorySelected }) => {
  return (
    <Pressable style={styles.CategoryItem} onPress={() => setCategorySelected(item.nombre)}>
      <Card newStyle={styles.contentCard}>
        <Text style={styles.textCategoryItem}>{item.nombre}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
