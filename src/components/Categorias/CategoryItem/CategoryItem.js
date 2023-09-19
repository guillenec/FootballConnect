import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from '../../Card/Card'

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

const styles = StyleSheet.create({
  CategoryItem: {
    marginVertical: 5
    // backgroundColor: '#F1FAEE'
  },
  textCategoryItem: {
    fontSize: 20,
    color: '#333333c5'
  },
  contentCard: {
    backgroundColor: '#fff',
    borderColor: '#FF6B6B',
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
