import { Platform, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: statusBarHeight,
    width: '100%',
    flex: 1,
    backgroundColor: colors.color7
  }
})

export default styles
