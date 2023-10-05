import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 450,
    backgroundColor: colors.color5
  },
  containCartItem: {
    width: 400,
    overflow: 'hidden',
    height: 210,
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
    marginTop: 10,
    marginHorizontal: '.5%'
  },
  cardImage: {
    height: 150,
    aspectRatio: 1,
    resizeMode: 'cover',
    borderRadius: 4,
    borderWidth: 2
  },
  headCard: {
    backgroundColor: colors.color5,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    color: colors.color1,
    fontFamily: 'NunitoSemibold',
    fontSize: 18
  },
  button: {
    position: 'absolute',
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 8,
    width: 40,
    height: 40,
    backgroundColor: colors.color1,
    color: colors.color4,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },
  icon: {
    color: colors.color4,
    fontSize: 20
  },
  androidShadow: {
    elevation: 5 // Elevación para sombra en Android
  },
  // iOS shadow
  iosShadow: {
    shadowColor: colors.color3,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },

  // bottom
  contentMaps: {
    width: 200,
    height: 200,
    backgroundColor: colors.color1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  map: {
    width: '90%',
    height: '90%'
  }
})

export default styles
