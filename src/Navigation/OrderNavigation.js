import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Orders } from '../screens'

const Stack = createNativeStackNavigator()

const OrderNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Orders'
    >
      <Stack.Screen
        name='OrdersNav'
        component={Orders}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default OrderNavigation
