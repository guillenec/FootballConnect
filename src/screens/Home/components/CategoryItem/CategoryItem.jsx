import { Pressable, Text } from 'react-native'
import React from 'react'
import styles from './CategoryItem.style'
import Card from '../../../../components/Card/Card'

const CategoryItem = ({ item, navigation }) => {
  // console.log('Category ITEM ->', item)
  return (
    <Pressable
      onPress={() => navigation.navigate('ItemListCategory', { category: item.id })}
      style={styles.CategoryItem}
    >
      <Card newStyle={styles.contentCard}>
        <Text style={styles.textCategoryItem}>{item.nombre}</Text>
      </Card>
    </Pressable>
  )
}

export default CategoryItem
