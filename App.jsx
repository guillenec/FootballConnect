import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'
import Navigator from './src/Navigation/Navigator'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Navigator />
  )
}

export default App
// const styleApp = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//   }
// })
