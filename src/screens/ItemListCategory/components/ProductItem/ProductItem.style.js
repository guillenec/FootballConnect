import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/colors'

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.color4,
    width: 200,
    height: 250,
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    // borderWidth: 1,
    // borderColor: '#333',
    borderRadius: 5,
    shadowColor: colors.color7,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
    overflow: 'hidden'

  },
  contentCardText: {
    width: '100%',
    height: '40%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    gap: 3
  },
  cardTextTitle: {
    width: '90%',
    textAlign: 'center',
    color: colors.color1,
    fontFamily: 'NunitoBold',
    fontSize: 19
  },
  cardText: {
    // backgroundColor: '#FF6B6B',
    width: '90%',
    color: colors.color3,
    textAlign: 'center',
    fontFamily: 'NunitoRegular',
    fontSize: 15
  },

  cardImage: {
    width: '100%',
    height: '60%',
    resizeMode: 'cover'
  }
})

export default styles
