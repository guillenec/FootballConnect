import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './Products.style'
import { equiposBarrio } from '../../data/categoryDb'
import { Header, SearchInput } from '../../components'

const Products = ({ category }) => {
  const [arrProduct, setArrProduct] = useState([])
  const [keyword, setKeyword] = useState('')

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(equiposBarrio)
      }, 1000)
    })
  }

  async function getProducts () {
    try {
      const data = await fetchProducts()
      setArrProduct(data)
    } catch (error) {
      console.log('error al traer los equipos', error)
    }
  }

  useEffect(() => {
    const allProducts = getProducts()

    if (category) {
      const filterCategory = allProducts.filter(item => item.categoria_id === category)
      const filterKeyword = filterCategory.filter(item => item.nombre.toLowerCase().includes(keyword.toLowerCase()))
      setArrProduct(filterKeyword)
    } else {
      const productFilter = allProducts.filter(item => item.nombre.toLowerCase().includes(keyword.toLowerCase()))
      setArrProduct(productFilter)
    }
  }, [category, keyword])

  return (
    <View style={styles.container}>
      <Header title='Productos' />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        <FlatList
          data={arrProduct}
          keyExtractor={product => product._id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nombre}</Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default Products
