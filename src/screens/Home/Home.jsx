import React from 'react'

import Header from '../../components/Header/Header'
import Categorias from './components/Categorias/Categorias'
import styles from './Home-style'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <View style={styles.containerHome + style.container}>
      <Header title='futbol conect' />
      <View style={styles.containerCategorias}>
        <Categorias navigation={navigation} />
      </View>
    </View>

  )
}

export default Home

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
