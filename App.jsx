import { useState } from 'react'
import { Products, Home } from './src/screens/index'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')

  if (!fontsLoaded) {
    return null
  }

  return (
    categorySelected
      ? <Products category={categorySelected} />
      : <Home setCategorySelected={setCategorySelected} />
  )
}

export default App
