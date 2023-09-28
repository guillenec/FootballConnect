import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
  containItemDetail: {
    width: '100%',
    height: '100%',
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  contentCard: {
    width: '90%',
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: 300,
    height: 360,
    backgroundColor: colors.color4,
    borderRadius: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 1,
    paddingVertical: 1,
    margin: 10,
    shadowColor: '#000',
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    gap: 3

  },
  headCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    gap: 3
  },
  identify: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.color2
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.color1
  },
  cardText: {
    width: '100%',
    fontSize: 16,
    paddingHorizontal: 10,
    color: colors.color3
  },
  cardImage: {
    width: '100%',
    height: '65%',
    borderRadius: 5,
    objectFit: 'cover',
    marginBottom: 1,
    paddingBottom: 1
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
    // flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
