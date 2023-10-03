import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const styles = StyleSheet.create({
  containCartItem: {
    width: '100%',
    height: 100,
    // flex: 1,
    color: colors.color1,
    backgroundColor: colors.color5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    gap: 10,
    borderWidth: 2,
    borderColor: colors.color1,
    borderRadius: 4,
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5

  },
  cardImage: {
    width: 50,
    height: '100%',
    resizeMode: 'cover'
  },
  name: {
    color: colors.color1,
    fontFamily: 'NunitoSemiBold',
    fontSize: 18
  },
  detalle: {
    color: colors.color3,
    fontFamily: 'NunitoRegular',
    fontSize: 16
  },
  button: {
    backgroundColor: colors.color1,
    color: colors.color4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5

  }
})

export default styles
