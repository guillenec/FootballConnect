import { Platform, StatusBar, StyleSheet } from 'react-native'

const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight : 0

const styles = StyleSheet.create({
  containerHome: {
    fontFamily: 'NunitoRegular',
    flex: 1,
    marginTop: statusBarHeight,
    // flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  containerCategorias: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    // borderWidth: 2,
    // borderColor: 'black',
    // borderRadius: 4,
    padding: 5
  }

})

export default styles
