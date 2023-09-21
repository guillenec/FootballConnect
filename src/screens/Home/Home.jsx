import React from 'react'
// import Header from '../../components/Header/Header'
// import Categorias from '../../components/Categorias/Categorias'

import { Header } from '../../components/index'
import { Categorias } from './components'
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
