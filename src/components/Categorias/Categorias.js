import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

const Categorias = () => {
  return (
    <View>
      <FlatList
        data={item}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CategoryItems />
        )}
      />
    </View>
  )
}

export default Categorias

const styles = StyleSheet.create({})
