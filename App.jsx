import { StyleSheet, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home/Home'

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
    backgroundColor: '#f0f08e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})
