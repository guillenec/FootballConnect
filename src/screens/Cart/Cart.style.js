import { Platform, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: statusBarHeight,
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
  list: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  cartContentContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: colors.color1,
    borderRadius: 4,
    padding: 5,
    paddingTop: 10

  },
  cartTextTitle: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: colors.color1
  },
  cartTextPArrafo: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: colors.color3
  }

})

export default styles
