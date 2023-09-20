import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    padding: 10
  },
  inputText: {
    color: colors.color7,
    backgroundColor: colors.color2,
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.color1,
    width: '80%',
    fontSize: 18
  },
  buttonSearch: {},
  buttonClear: {}

})

export default styles
