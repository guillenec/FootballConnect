import { useState } from 'react'
import { Home, ItemListCategory, ItemDetail } from './src/screens/index'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'

const App = () => {
  const [fontsLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState('')
  const [productDetail, setProductDetail] = useState([])

  if (!fontsLoaded) {
    return null
  }

  console.log('category selected -> ', categorySelected)
  return (
    productDetail.length !== 0
      ? <ItemDetail product={productDetail} setCategorySelected={setCategorySelected} />
      : categorySelected && categorySelected !== 'all'
        ? <ItemListCategory category={categorySelected} setCategorySelected={setCategorySelected} setProductDetail={setProductDetail} />
        : <Home setCategorySelected={setCategorySelected} />
  )
}

export default App
