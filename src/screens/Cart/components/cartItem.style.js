import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/colors'

const styles = StyleSheet.create({
  containCartItem: {
    width: 400,
    // overflow: 'hidden',
    height: 210,
    // flex: 1,
    color: colors.color1,
    backgroundColor: colors.color4,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    gap: 2,
    borderWidth: 2,
    borderColor: colors.color1,
    borderRadius: 5,
    padding: 2,
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
    marginHorizontal: '.5%'
  },
  contenido: {
    position: 'relative',
    width: '50%',
    flex: 1,
    borderRadius: 4,
    // overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headCard: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    color: colors.color1,
    fontFamily: 'NunitoBold',
    fontSize: 20
  },
  subtitulo: {
    color: colors.color3,
    fontFamily: 'NunitoRegular',
    fontSize: 16
  },
  cardImage: {
    backgroundColor: colors.color3,
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 4,
    borderWidth: 2
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
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.color5,
    borderRadius: 4,
    overflow: 'hidden'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  textLoading: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    textTransform: 'capitalize',
    color: colors.color1
  }
})

export default styles
