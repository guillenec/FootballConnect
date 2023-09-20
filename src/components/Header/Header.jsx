import { Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'

const Header = ({ title }) => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.textHeader}>{title}</Text>
    </View>
  )
}

export default Header
