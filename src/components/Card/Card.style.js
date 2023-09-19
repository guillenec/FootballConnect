import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const estilo = StyleSheet.create({
  contentCard: {
    backgroundColor: colors.color1,
    // borderColor: '#FF6B6B',
    shadowColor: colors.color3,
    shadowOffset: { height: 5, width: 3 },
    elevation: 10,
    shadowOpacity: 1,
    shadowRadius: 5
  }
})

export default estilo
