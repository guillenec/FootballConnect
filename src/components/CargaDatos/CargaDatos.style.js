import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#78B382',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    gap: 20
  },
  containSectionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: 'center',
    height: 'auto',
    width: 300,
    backgroundColor: '#FF7F50',
    color: 'white',
    borderRadius: 4
  },
  buttonAdd: {
    color: '#ffffff',
    borderWidth: 2,
    borderColor: '#2E86C1',
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  buttonText: {
    color: 'white', // Cambia el color del texto del botón
    fontSize: 16,
    fontWeight: 'semibold'
  },
  inputText: {
    width: 200,
    height: 40,
    maxHeight: 40,
    position: 'relative',
    color: '#ffffff'
  },

  listContainer: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  sectionTextList: {
    width: 180,
    backgroundColor: '#4AA8D6',
    borderColor: '#FFA07A',
    color: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 10,
    padding: 8

  },
  textList: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'normal'
  },
  iconTrash: {
    color: '#FF7F50',
    fontSize: 24
  }

})

export default styles
