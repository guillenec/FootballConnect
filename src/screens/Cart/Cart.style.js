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
    height: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.color1,
    borderRadius: 4,
    padding: 5
  },
  cartContent: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: colors.color1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 4
  },
  cartTextTitle: {
    fontFamily: 'NunitoBold',
    fontSize: 20,
    color: colors.color4
  },
  cartTextPArrafo: {
    fontFamily: 'NunitoRegular',
    fontSize: 16,
    color: colors.color3
  }

})

export default styles
