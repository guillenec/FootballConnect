import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, ItemDetail, ItemListCategory } from '../screens'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          // options={{
          //   headerShown: false
          // }}
        />
        <Stack.Screen
          name='ItemListCategory'
          component={ItemListCategory}
          // options={{
          //   headerShown: false
          // }}
        />
        <Stack.Screen
          name='ItemDetail'
          component={ItemDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
