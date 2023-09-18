import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({ title }) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#007A8E',
    height: 90,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 30,
    color: '#F1FAEE'
  }

})
