import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  containerProducts: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.color6
  },
  listContainer: {
    width: '100%',
    backgroundColor: colors.color1,
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  list: {
    width: '100%',
    marginTop: 15,
    backgroundColor: colors.color2

  }
})

export default styles
