import React from 'react'

import Header from '../../components/Header/Header'
import Categorias from './components/Categorias/Categorias'
import styles from './Home-style'
import { View } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.containerHome}>
      <Header title='🏠 | categorias' />
      <View style={styles.containerCategorias}>
        <Categorias navigation={navigation} />
      </View>
    </View>

  )
}

export default Home
