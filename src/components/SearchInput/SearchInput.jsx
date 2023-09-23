import { Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './SearchInput.style'
import Ionicons from '@expo/vector-icons/Ionicons'

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  const search = () => {
    const expresion = /\d/
    if (expresion.test(value)) {
      setError('solo se permiten letras')
    } else {
      setError('')
      onSearch(value)
    }
  }

  const clearInput = () => {
    setValue('')
    setError('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder='Buscar...'
          placeholderTextColor='#F5F5DC'
          style={styles.inputText}
        />

        {/* boton search */}
        <Pressable
          style={styles.buttonSearch}
          onPress={search}
        >
          <Ionicons name='search' size={24} color='#FF6B6B' />
        </Pressable>
        {/* boton clear  */}
        <Pressable
          style={styles.buttonClear}
          onPress={clearInput}
          disabled={!value}
        >
          <Ionicons name='close' size={24} color='#FF6B6B' />
        </Pressable>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default SearchInput
