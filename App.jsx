import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Home } from './src/screens/index'

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F1FAEE',
    alignItems: 'center',
    justifyContent: 'start'
  }
})
