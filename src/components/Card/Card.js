import { StyleSheet, View } from 'react-native'
import React from 'react'

const Card = ({ children, newStyle }) => {
  return (
    <View style={[estilo.contentCard, newStyle]}>
      {children}
    </View>
  )
}

export default Card

const estilo = StyleSheet.create({
  contentCard: {
    backgroundColor: '#6A8DBE',
    // borderColor: '#FF6B6B',
    shadowColor: '#000',
    shadowOffset: { height: 5, width: 3 },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 5
  }
})
