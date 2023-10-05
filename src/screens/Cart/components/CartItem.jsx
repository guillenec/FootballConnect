import { Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './cartItem.style'
import Ionicons from '@expo/vector-icons/Ionicons'
// import MapView from 'react-native-maps'
import geocodeAddress from '../Service/GeocodingService'
import MapView from 'react-native-maps'

const CartItem = ({ objeto }) => {
  console.log('OBJETO CART ->', objeto)
  const [cordenadas, setCordenadas] = useState(null)
  console.log('CORDENADAS ->', cordenadas)
  useEffect(() => {
    const fetchCoordenadas = async () => {
      try {
        const coordenadas = await geocodeAddress(objeto?.cancha.direccion)
        setCordenadas(coordenadas)
      } catch (error) {
        console.error('error al obtener coordenadas', error.message)
      }
    }
    if (objeto?.cancha.direccion) {
      fetchCoordenadas()
    }
  }, [objeto?.cancha.direccion])

  return (
    <View style={styles.containCartItem}>
      <View>
        <View style={styles.headCard}>
          <Text style={styles.name}>{objeto?.cancha.nombre || '...cargando'}</Text>
          <Text style={styles.name}>{objeto?.reserva.horaInicio || '...cargando'}</Text>
        </View>
        <Image
          resizeMode='cover'
          resizeMethod='resize'
          style={styles.cardImage}
          source={{ uri: objeto?.galeria?.imagenes[0] || '...cargando' }}
        />
        <TouchableOpacity
          style={[
            styles.button,
            Platform.OS === 'android' ? styles.androidShadow : styles.iosShadow
          ]}
        >
          <Ionicons style={styles.icon} name='trash' />
        </TouchableOpacity>
      </View>

      <View style={styles.contentMaps}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -34.6037,
            longitude: -58.3816,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation
          userInterfaceStyle='dark'
        />
        {/* <Text style={styles.name}>{cordenadas?.lat || '...cargando'}</Text>
    <Text style={styles.name}>{cordenadas?.lng || '...cargando'}</Text> */}

      </View>
    </View>

  )
}

export default CartItem
