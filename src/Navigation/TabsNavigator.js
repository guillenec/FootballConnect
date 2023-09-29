import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, ItemListCategory } from '../screens'

const Tab = createBottomTabNavigator()
const TabsNavigator = () => {
  return (
    <Tab.Navigator style={styles.container}>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='ItemListCategory' component={ItemListCategory} />
    </Tab.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  }
})
