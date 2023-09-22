import React from 'react'

import Header from '../../components/Header/Header'
import Categorias from './components/Categorias/Categorias'
import styles from './Home-style'
import { View } from 'react-native'

const Home = ({ setCategorySelected }) => {
  return (
    <View style={styles.containerHome}>
      <Header title='futbol conect' />
      <Categorias setCategorySelected={setCategorySelected} />
    </View>

  )
}

export default Home
