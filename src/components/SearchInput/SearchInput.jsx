import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import styles from './SearchInput.style'
import Ionicons from '@expo/vector-icons/Ionicons'

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue('')
    onSearch('')
  }

  return (
    <View style={styles.container}>
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
  )
}

export default SearchInput
