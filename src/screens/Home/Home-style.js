import { Platform, StatusBar, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerHome: {
    fontFamily: 'NunitoRegular',
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  containerCategorias: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 4,
    padding: 5
  }

})

export default styles
