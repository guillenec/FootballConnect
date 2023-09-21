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
  const [loader, setLoader] = useState(false)

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(equiposBarrio)
      }, 3000)
    })
  }

  async function getProducts () {
    try {
      setLoader(true)
      const data = await fetchProducts()
      setAllProducts(data)
    } catch (error) {
      console.log('error al traer los equipos', error)
    } finally {
      setLoader(false)
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
      {
      loader
        ? (
          <Text style={{ color: 'green', fontSize: 19, paddingVertical: 10, paddingHorizontal: 15 }}>Cargando...
          </Text>
          )
        : arrProduct.length > 0
          ? (
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
            )
          : (
            <Text style={{ color: 'red', fontSize: 19, paddingVertical: 10, paddingHorizontal: 15 }}>No se encontraron coincidencias...
            </Text>
            )
      }

    </View>
  )
}

export default Products
