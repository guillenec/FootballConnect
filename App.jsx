import { useState } from 'react'
import { Products, Home } from './src/screens/index'

const App = () => {
  const [categorySelected, setCategorySelected] = useState(false)

  return (
    categorySelected
      ? <Products category={categorySelected} />
      : <Home setCategorySelected={setCategorySelected} />
  )
}

export default App
