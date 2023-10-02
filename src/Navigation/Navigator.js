import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, ItemDetail, ItemListCategory } from '../screens'

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ItemListCategory'
        component={ItemListCategory}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='ItemDetail'
        component={ItemDetail}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default Navigator
