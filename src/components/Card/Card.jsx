import { View } from 'react-native'
import React from 'react'
import estilo from './Card.style'

const Card = ({ children, newStyle }) => {
  return (
    <View style={[estilo.contentCard, newStyle]}>
      {children}
    </View>
  )
}

export default Card
