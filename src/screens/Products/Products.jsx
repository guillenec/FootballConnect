import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import { equiposBarrio } from '../../data/categoryDb'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'

const Products = ({ category }) => {
  const [allProducts, setAllProducts] = useState([])
  const [arrProduct, setArrProduct] = useState([])
  const [keyword, setKeyword] = useState('')

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(equiposBarrio)
      }, 3000)
    })
  }

  async function getProducts () {
    try {
      const data = await fetchProducts()
      setAllProducts(data)
    } catch (error) {
      console.log('error al traer los equipos', error)
    }
  }

  useEffect(() => {
    getProducts()

    console.log(allProducts)

    if (category) {
      const filterCategory = allProducts.filter(item => item.category === category)
      const filterKeyword = filterCategory.filter(item => item.nombre.toLowerCase().includes(keyword.toLowerCase()))
      setArrProduct(filterKeyword)
    } else {
      const productFilter = allProducts.filter(item => item.nombre.toLowerCase().includes(keyword.toLowerCase()))
      setArrProduct(productFilter)
    }
  }, [category, keyword])

  return (
    <View style={styles.containerProducts}>
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
