import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  containerProducts: {
    width: '100%',
    backgroundColor: colors.color4,
    overflow: 'hidden'
  },
  listContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: colors.color1,
    paddingHorizontal: 10,
    marginTop: 15,
    overflow: 'scroll'

  },
  list: {
    width: '100%',
    height: 'auto',
    marginTop: 15
    // backgroundColor: colors.color2
  }
})

export default styles
