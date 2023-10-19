// import { FlatList, Pressable, Text, View } from 'react-native'
import { FlatList, Pressable, Text, View } from 'react-native'
import styles from './ItemListCategory.style'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchCanchasGeneral } from '../../features/canchasSlice/canchasSlice'
import SearchInput from '../../components/SearchInput/SearchInput'
import ProductItem from './components/ProductItem/ProductItem'
import Ionicons from '@expo/vector-icons/Ionicons'

const ItemListCategory = ({ navigation, route }) => {
  const [products, setProducs] = useState([])
  const [keyword, setKeyword] = useState('')
  const dispatch = useDispatch()

  const canchas = useSelector((state) => state?.canchas?.canchas)
  const loading = useSelector((state) => state.canchas.loading)
  // const error = useSelector((state) => state.cancha.error)

  const { tipo } = route.params
  console.log('tipo ->', tipo)
  console.log('keyword ->', keyword)

  useEffect(() => {
    dispatch(fetchCanchasGeneral())
  }, [dispatch])

  useEffect(() => {
    if (tipo && keyword === '') {
      const response = canchas.filter((cancha) => cancha.id_tipo === tipo)
      setProducs(response)
    } else if (keyword !== '') {
      const response = canchas?.find((cancha) =>
        cancha.nombre?.toLowerCase().includes(keyword?.toLowerCase())
      )
      setProducs(response)
    } else {
      setProducs(canchas)
    }
  }, [dispatch, keyword, tipo])

  console.log('canchas ->', canchas)
  console.log('products ->', products)

  return (
    <View style={styles.containerProducts}>
      <Header title='🏟️ Lista equipos' />

      <SearchInput onSearch={setKeyword} />
      {
      loading
        ? (
          <Text style={styles.loading}>Cargando...
          </Text>
          )
        : products.length > 0
          ? (
            <View style={styles.listContainer}>
              <FlatList
                data={products}
                numColumns={2}
                keyExtractor={product => product?.id}
                columnWrapperStyle={styles.weapperStyle}
                renderItem={({ item }) => (
                  <ProductItem item={item} navigation={navigation} />

                )}
              />
            </View>
            )
          : (
            <Text style={styles.error}>No se encontraron coincidencias...
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
