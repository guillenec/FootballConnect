import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flexDirection: 'column',
    gap: 10
  },
  containerSearch: {
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  error: {
    paddingLeft: 15,
    color: 'red',
    fontSize: 14,
    textAlign: 'left'
  },
  buttonSearch: {},
  buttonClear: {}

})

export default styles
