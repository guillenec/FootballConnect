import { Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react'

const App = () => {
  const [textValue, setTextValue] = useState('')
  const [list, setLIst] = useState([])

  return (
    <View style={styles.container}>
    <View style={styles.containSectionButton}>
      <View>
        <TextInput 
        placeholder="Item de la lista"
        value={textValue} 
        style={styles.inputText}>
        </TextInput>
        <View style={styles.underline} />
      </View>
      <Button title="Agregar" />
    </View>
    <View style={styles.listContainer}>
      <View style={styles.sectionTextList}>
        <Text>Lista</Text>
      </View>
      <View style={styles.sectionTextList}>
        <Text>Lista</Text>
      </View>
      <View style={styles.sectionTextList}>
        <Text style={{color:"#4d494a", fontWeight:"500" , fontSize:16}}>Lista</Text>
      </View>
    </View>
  </View>
    )
}

export default App


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    paddingLeft:20,
    paddingRight:20,
    flex: 1,
    flexDirection: 'column',
    gap:20,
  },
  containSectionButton: {
    flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
  },

  inputText:{
    width: 200,
    height: 40, 
    position: 'relative',
    backgroundColor: 'white',
  },
  underline: {
    content: '',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 5, // Ajusta el grosor del subrayado
    backgroundColor: 'gray', // Color del subrayado
    borderRadius: 10, // Ajusta este valor para redondear más o menos
  },
  listContainer:{
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:200,
    borderRadius:10,
    gap:10,
  },
  sectionTextList:{
    width:300,
    backgroundColor:"#f1c274",
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius:10,
    borderWidth:1,
    borderColor:"#f7d8bf",
    
  }
});
