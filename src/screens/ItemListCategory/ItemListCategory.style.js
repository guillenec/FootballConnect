import { Platform, StatusBar, StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  containerProducts: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    width: '100%',
    flex: 1,
    backgroundColor: colors.color4,
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    overflow: 'hidden'
  },
  loading: {
    color: 'green', fontFamily: 'NunitoRegular', fontSize: 19, paddingVertical: 10, paddingHorizontal: 15
  },
  error: {
    color: 'red', fontFamily: 'NunitoRegular', fontSize: 19, paddingVertical: 10, paddingHorizontal: 15
  },
  listContainer: {
    width: '100%',
    flex: 1,
    // backgroundColor: colors.color1,
    marginTop: 15,
    overflow: 'scroll'

  },
  weapperStyle: {
    width: '100%',
    flex: 1,
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    gap: 5
    // backgroundColor: colors.color2
  },
  botonBack: {
    position: 'absolute',
    bottom: 10,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    // flez: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default styles
