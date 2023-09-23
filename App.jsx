import { useState } from 'react'
import { Home, ItemListCategory, ItemDetail } from './src/screens/index'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [productDetail, setProductDetail] = useState(0)

  if (!fontsLoaded) {
    return null
  }

  return (
    productDetail
      ? <ItemDetail product={productDetail} setProductDetail={setProductDetail} />
      : categorySelected
        ? <ItemListCategory category={categorySelected} setCategorySelected={setCategorySelected} setProductDetail={setProductDetail} />
        : <Home setCategorySelected={setCategorySelected} />
  )
}

export default App
