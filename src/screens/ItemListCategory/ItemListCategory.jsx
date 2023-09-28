import { FlatList, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './ItemListCategory.style'
import { equiposBarrio } from '../../data/categoryDb'
import Header from '../../components/Header/Header'
import SearchInput from '../../components/SearchInput/SearchInput'
import ProductItem from './components/ProductItem/ProductItem'
import Ionicons from '@expo/vector-icons/Ionicons'

const ItemListCategory = ({ category, navigation }) => {
  const [allProducts, setAllProducts] = useState([])
  const [arrProduct, setArrProduct] = useState([])
  const [keyword, setKeyword] = useState('')
  const [loader, setLoader] = useState(false)

  console.log('CATEGORIA -> ', category)

  const fetchProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(equiposBarrio)
      }, 1000)
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
      setTimeout(() => {
        setLoader(false)
      }, 1000)
    }
  }
  // useEffect(() => {
  //   getProducts()
  // }, [allProducts])

  useEffect(() => {
    getProducts()

    console.log('todos ->', allProducts)
    if (category && keyword === '') {
      const filterCategory = allProducts?.filter(item => item.categoria_id === category)
      console.log('filterCategory -->', filterCategory)

      setArrProduct(filterCategory)
    } else if (keyword !== '') {
      const filterKeyword = allProducts?.filter(item => item.nombre.toLowerCase().includes(keyword.toLowerCase()))
      console.log('filterCategory -->', filterKeyword)

      setArrProduct(filterKeyword)
    }
  }, [allProducts, category, keyword])

  // const setProductDetailId = (id) => {
  //   console.log('id ->', id)
  // }

  return (
    <View style={styles.containerProducts}>
      <Header title='Productos' />

      <SearchInput onSearch={setKeyword} />
      {
      loader && allProducts.length > 0
        ? (
          <Text style={{ color: 'green', fontSize: 19, paddingVertical: 10, paddingHorizontal: 15 }}>Cargando...
          </Text>
          )
        : arrProduct?.length > 0
          ? (
            <View style={styles.listContainer}>
              <FlatList
                style={styles.list}
                data={arrProduct}
                keyExtractor={product => product._id}
                horizontal
                renderItem={({ item }) => (
                  <ProductItem item={item} navigation={navigation} />
                  // <View>
                  //   <Text>{item.nombre}</Text>
                  // </View>
                )}
              />
            </View>
            )
          : (
            <Text style={{ color: 'red', fontSize: 19, paddingVertical: 10, paddingHorizontal: 15 }}>No se encontraron coincidencias...
            </Text>
            )
      }
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={styles.botonBack}
      >
        <Ionicons
          name='arrow-back'
          size={25} color='white'
        />
      </Pressable>
    </View>
  )
}

export default ItemListCategory
