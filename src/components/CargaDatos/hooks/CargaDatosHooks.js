import { useState } from 'react'

const useCargaDatosHooks = () => {
  const [textValue, setTextValue] = useState('')
  const [list, setLIst] = useState([])

  // estados para el modal
  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const removeProduct = (index) => {
    console.log(itemSelected)
    const updateProduct = [...list]
    updateProduct.splice(itemSelected, 1)
    setLIst(updateProduct)
    setModalVisible(false)
  }

  const handleModal = (index) => {
    setModalVisible(true)
    setItemSelected(index)
  }

  const handleChangeItem = (value) => {
    setTextValue(value)
  }

  const handleAddItem = () => {
    if (textValue === '') {
      return
    }
    console.log('ejecuta la funcion de agregar elemento')
    setLIst(prevState => [...prevState, { id: Math.random(), value: textValue }])
    setTextValue('')
  }
  return {
    textValue,
    list,
    itemSelected,
    setItemSelected,
    modalVisible,
    setModalVisible,
    removeProduct,
    handleModal,
    handleChangeItem,
    handleAddItem
    // renderList
  }
}

export default useCargaDatosHooks
