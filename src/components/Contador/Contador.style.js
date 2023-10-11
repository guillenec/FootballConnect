import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  containerContador: {
    width: '100%',
    height: 150,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contadorComponent: {
    width: 'auto',
    height: 130,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 5
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors.color1,
    color: colors.color1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: 20,
    color: colors.color4
  }

})

export default styles
