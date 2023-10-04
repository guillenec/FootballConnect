import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const styles = StyleSheet.create({
  containCartItem: {
    width: '95%',
    overflow: 'hidden',
    height: 150,
    // flex: 1,
    color: colors.color1,
    backgroundColor: colors.color4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    gap: 10,
    borderWidth: 2,
    borderColor: colors.color1,
    borderRadius: 4,
    padding: 5,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginLeft: 5,
    marginTop: 10

  },
  cardImage: {
    height: '95%',
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 4,
    borderWidth: 2
  },
  headCard: {
    width: 120
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
