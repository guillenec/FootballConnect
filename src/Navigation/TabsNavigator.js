import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartNavigator from './CartNavigator'
import Navigator from './Navigator'
import { StyleSheet } from 'react-native'
import { colors } from '../utils/colors'
// import Ionicons from '@expo/vector-icons/Ionicons'
import Ionicons from '@expo/vector-icons/Ionicons'
import OrderNavigation from './OrderNavigation'

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Shop'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'pink',
        tabBarStyle: stylos.tabBar
      }}
    >
      <Tab.Screen
        name='Shop'
        component={Navigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='home-outline' size={23} color={focused ? colors.color1 : colors.color4} />
          )
        }}
      />
      <Tab.Screen
        name='CarShop' component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='cart-outline' size={23} color={focused ? colors.color1 : colors.color4} />
          )
        }}
      />
      <Tab.Screen
        name='Orders'
        component={OrderNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name='list' size={23} color={focused ? colors.color1 : colors.color4} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default TabsNavigator

const stylos = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.color2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  }
})
