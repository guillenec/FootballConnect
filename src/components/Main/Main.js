import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={styles.containMain}>
      <Text>Main</Text>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  containMain: {
    flex: 1,
    justifyContent:
    'center',
    alignItems: 'center',
    backgroundColor: 'pink'
  }
})
