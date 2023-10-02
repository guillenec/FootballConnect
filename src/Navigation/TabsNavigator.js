import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartNavigator from './CartNavigator'
import Navigator from './Navigator'

const Tab = createBottomTabNavigator()

const TabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Shop'
        component={Navigator}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name='Cart' component={CartNavigator}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  )
}

export default TabsNavigator
