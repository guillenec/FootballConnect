import { Platform, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: statusBarHeight,
    width: '100%',
    flex: 1,
    backgroundColor: colors.color7,
    alignItems: 'center'
  },
  cartContentContainer: {
    width: '100%',
    backgroundColor: 'tomato',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'tomato',
    borderRadius: 4,
    padding: 5,
    paddingTop: 10

  },
  cartContent: {},
  cartContentText: {}
})

export default styles
