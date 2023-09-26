import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  containerProducts: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.color4,
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    overflow: 'hidden'
  },
  listContainer: {
    width: '100%',
    height: '100%',
    // backgroundColor: colors.color1,
    paddingHorizontal: 10,
    marginTop: 15,
    overflow: 'scroll'

  },
  list: {
    width: '100%',
    height: 'auto',
    marginTop: 15
    // backgroundColor: colors.color2
  },
  botonBack: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#FF6B6B',
    marginVertical: 10,
    // flez: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default styles
